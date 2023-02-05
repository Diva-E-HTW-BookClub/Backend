import axios from "axios";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
  limit,
  orderBy,
  getDoc,
  arrayUnion,
  arrayRemove,
  FieldPath,
  startAfter,
} from "firebase/firestore";
import { firebaseDB } from "./firebaseConfig";
import { deleteDiscussionDocument } from "./firebaseDiscussions";
import { deleteResourceDocument } from "./firebaseResource";

type Book = {
  title: string;
  authors: string[];
  imageUrl: string;
};

type Discussion = {
  id: string;
  title: string;
  participants: string[];
  date: string;
  startTime: string;
  endTime: string;
  location: string;
  agenda: [];
  moderator: string;
  isArchived: boolean;
  maxParticipants: number;
};

type Resource = {
  id: string;
  title: string;
  content: string;
  moderator: string;
};

type BookClub = {
  id: string;
  name: string;
  moderator: string[];
  members: string[];
  maxMemberNumber: number;
  book: Book;
  discussions: Discussion[];
  resources: Resource[];
  owner: string;
  keywords: string[];
};

// generate all possible prefixes of a given string
function generatePrefixes(str: string): string[] {
  let prefixes: string[] = [];
  let strLowerCase = str.toLowerCase();
  for (let i = 1; i <= str.length; i++) {
    prefixes.push(strLowerCase.substring(0, i));
  }
  return prefixes;
}

// generates keywords for search by club name, book title and book authors
function generateKeywords(bookClub: any): string[] {
  let keywords: string[] = [];
  keywords.push(...generatePrefixes(bookClub.name));
  keywords.push(...generatePrefixes(bookClub.book.title));
  bookClub.book.authors.forEach((author: string) => {
    keywords.push(...generatePrefixes(author));
  });
  return keywords;
}

async function createBookClubDocument(data: BookClub) {
  data.keywords = generateKeywords(data);
  const doc = await addDoc(collection(firebaseDB, "bookClubs"), data);
  return doc.id;
}

async function updateBookClubDocument(bookClubId: string, data: any) {
  data.keywords = generateKeywords(data);
  const bookClubDocument = doc(firebaseDB, "bookClubs", String(bookClubId));

  updateDoc(bookClubDocument, data);
}

//Needs to delete the BookClub, its discussions and all of their comments
async function deleteBookClubDocument(bookClubId: string) {
  const bookClubDocument = doc(firebaseDB, "bookClubs", String(bookClubId));
  deleteDoc(bookClubDocument);

  //delete Discussions
  let discussionQuery = query(
    collection(firebaseDB, "bookClubs", String(bookClubId), "discussions")
  );

  var discussionDocuments = await getDocs(discussionQuery);
  discussionDocuments.forEach((doc) => {
    deleteDiscussionDocument(bookClubId, doc.id);
  });

  let resourceQuery = query(
    collection(firebaseDB, "bookClubs", String(bookClubId), "resources")
  );

  var resourceDocuments = await getDocs(resourceQuery);
  resourceDocuments.forEach((doc) => {
    deleteResourceDocument(bookClubId, doc.id);
  });
}

async function getBookClubDocument(bookClubId: string) {
  const bookClubDocument = doc(firebaseDB, "bookClubs", String(bookClubId));
  var bookClubResultDocument = await getDoc(bookClubDocument);
  let bookClubData = bookClubResultDocument.data();

  let discussionQuery = query(
    collection(firebaseDB, "bookClubs", String(bookClubId), "discussions"),
    orderBy("title"),
    limit(100)
  );
  var discussionDocuments = await getDocs(discussionQuery);
  var discussionArray: Discussion[] = [];

  discussionDocuments.forEach((doc) => {
    let discussionData = doc.data();
    discussionArray.push({
      id: doc.id,
      title: discussionData.title,
      participants: discussionData.participants,
      date: discussionData.date,
      startTime: discussionData.startTime,
      endTime: discussionData.endTime,
      location: discussionData.location,
      agenda: discussionData.agenda,
      moderator: discussionData.moderator,
      isArchived: discussionData.isArchived,
      maxParticipants: discussionData.maxParticipants
    });
  });

  let resourceQuery = query(
    collection(firebaseDB, "bookClubs", String(bookClubId), "resources"),
    orderBy("title"),
    limit(100)
  );
  var resourceDocuments = await getDocs(resourceQuery);
  var resourceArray: Resource[] = [];

  resourceDocuments.forEach((doc) => {
    let resourceData = doc.data();
    resourceArray.push({
      id: doc.id,
      title: resourceData.title,
      content: resourceData.content,
      moderator: resourceData.moderator,
    });
  });
  if (bookClubData) {
    return {
      id: bookClubId,
      name: bookClubData.name,
      moderator: bookClubData.moderator,
      members: bookClubData.members,
      maxMemberNumber: bookClubData.maxMemberNumber,
      book: bookClubData.book,
      discussions: discussionArray,
      resources: resourceArray,
      owner: bookClubData.owner,
    };
  }
}

// serch book clubs by their name, book title, author
// and where members list does not contain given member id
// (needed to find clubs where user is not a member)
async function searchBookClubDocuments(
  inputText: string,
  memberId: string,
  resultsLimit: number,
  lastBookClubId?: string
) {
  let queryConstraints = [
    orderBy("name"),
    limit(resultsLimit)
  ];

  if (lastBookClubId != null) {
    // https://firebase.google.com/docs/firestore/query-data/query-cursors#use_a_document_snapshot_to_define_the_query_cursor
    // this is needed for pagination
    // we get the last found book club document by id
    // and tell firebase to return new results starting after that document
    const lastBookClubDocument = doc(firebaseDB, "bookClubs", lastBookClubId);
    let lastBookClubDocumentResult = await getDoc(lastBookClubDocument);
    queryConstraints.push(startAfter(lastBookClubDocumentResult));
  }
  if (inputText != null && inputText !== "") {
    queryConstraints.push(
      where("keywords", "array-contains", inputText.toLowerCase())
    );
  }
  // find all documents from bookClubs collection matching the search query
  // regardles of their members
  let q = query(collection(firebaseDB, "bookClubs"), ...queryConstraints);
  var results = await getDocs(q);
  return (
    results.docs
      .map(docToBookClub)
      // remove clubs where our user is a member
      .filter((bookClub) => !bookClub.members.includes(memberId))
  );
}

// convert document from firestore to book club
function docToBookClub(doc: any) {
  let data = doc.data();
  return {
    id: doc.id,
    name: data.name,
    moderator: data.moderator,
    members: data.members,
    maxMemberNumber: data.maxMemberNumber,
    book: data.book,
    discussions: data.discussions,
    resources: data.resources,
    owner: data.owner,
    keywords: data.keywords
  };
}

// https://firebase.google.com/docs/firestore/manage-data/add-data#update_elements_in_an_array
async function addMember(bookClubId: string, memberId: string) {
  const bookClubDocument = doc(firebaseDB, "bookClubs", bookClubId);
  // Atomically add a new member to the "members" array field.
  await updateDoc(bookClubDocument, {
    members: arrayUnion(memberId),
  });
}

async function removeMember(bookClubId: string, memberId: string) {
  const bookClubDocument = doc(firebaseDB, "bookClubs", bookClubId);
  // Atomically remove a member from the "members" array field.
  await updateDoc(bookClubDocument, {
    members: arrayRemove(memberId),
  });
}

async function getBookClubsByModerator(moderatorId: string){
  let queryConstraints = [where("moderator", "array-contains", moderatorId)];
  let q = query(collection(firebaseDB, "bookClubs"), ...queryConstraints);
  var results = await getDocs(q);
  return results.docs.map(docToBookClub);
}

async function getBookClubsByJoinedMember(memberId: string){
  let queryConstraints = [
      where("members", "array-contains", memberId),
  ];
  let q = query(collection(firebaseDB, "bookClubs"), ...queryConstraints);
  var results = await getDocs(q);
  return (
      results.docs
          .map(docToBookClub)
          // remove clubs where our user is a moderator
          .filter((bookClub) => !bookClub.moderator.includes(memberId))
  );
}

async function getFullBookClubsByMember(userId: string){
  let queryConstraints = [where("members", "array-contains", userId)];
  let q = query(collection(firebaseDB, "bookClubs"), ...queryConstraints);
  var results = await getDocs(q);
  let resultsArray = results.docs.map(docToBookClub);

  let returnArray: any = []
  for await (const bookClub of resultsArray){
    await getBookClubDocument(bookClub.id).then((fullBookClub) => { 
      if (fullBookClub) {
        returnArray.push(fullBookClub)
      }
    })
  }
  return returnArray;
}


export {
  createBookClubDocument,
  updateBookClubDocument,
  deleteBookClubDocument,
  getBookClubDocument,
  searchBookClubDocuments,
  addMember,
  removeMember,
  getBookClubsByModerator,
  getBookClubsByJoinedMember,
  getFullBookClubsByMember,
};

export type { BookClub, Discussion };
