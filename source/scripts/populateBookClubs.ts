import { doc, setDoc } from "firebase/firestore";
import { createBookClubDocument } from "../firebase/firebaseBookClub";
import { firebaseDB } from "../firebase/firebaseConfig";
import { createDiscussionDocument } from "../firebase/firebaseDiscussions";


console.log("starting population!")

// Create Club
setDoc(doc(firebaseDB, "bookClubs", "DEMO_BOOKCLUB_1"), {
   "book" : {
      "authors" : ["Don Gosselin"],
      "imageUrl" : "https://covers.openlibrary.org/b/id/4640658-M.jpg",
      "title" : "JavaScript"
   },
   "discussions" : [],
   "id" : "",
   "maxMemberNumber" : 10,
   "members" : ["B3JDEeG3ELPO3H9qJ0lXPIB2fWH3"],
   "moderator" : ["B3JDEeG3ELPO3H9qJ0lXPIB2fWH3"],
   "name" : "Leanders Javascript Club",
   "owner" : "B3JDEeG3ELPO3H9qJ0lXPIB2fWH3",
   "resources" : []
  })

// Create Discussions
setDoc(doc(firebaseDB, "bookClubs", "DEMO_BOOKCLUB_1", "discussions", "DEMO_DISCUSSION_1"), {
   "date" : "2023-01-12T12:00:00.000Z",
   "endTime" : "2023-01-12T13:00:00.000Z",
   "location" : "htw",
   "moderator" : "B3JDEeG3ELPO3H9qJ0lXPIB2fWH3",
   "participants" : [],
   "startTime" : "2023-03-10T12:00:00.000Z",
   "title" : "meeting",
})
setDoc(doc(firebaseDB, "bookClubs", "DEMO_BOOKCLUB_1", "discussions", "DEMO_DISCUSSION_2"), {
   "date" : "2023-03-10T12:00:00.000Z",
   "endTime" : "2023-03-10T13:00:00.000Z",
   "location" : "htw",
   "moderator" : "B3JDEeG3ELPO3H9qJ0lXPIB2fWH3",
   "participants" : [],
   "startTime" : "2023-03-10T12:00:00.000Z",
   "title" : "meeting 2",
})

//Create Comments
setDoc(doc(firebaseDB, "bookClubs", "DEMO_BOOKCLUB_1", "discussions", "DEMO_DISCUSSION_2", "comments", "DEMO_COMMENT_1"), {
   "moderator" : "B3JDEeG3ELPO3H9qJ0lXPIB2fWH3",
   "passage" : "56564",
   "text" : "633",
})
setDoc(doc(firebaseDB, "bookClubs", "DEMO_BOOKCLUB_1", "discussions", "DEMO_DISCUSSION_2", "comments", "DEMO_COMMENT_2"), {
   "moderator" : "B3JDEeG3ELPO3H9qJ0lXPIB2fWH3",
   "passage" : "56564",
   "text" : "633",
})
setDoc(doc(firebaseDB, "bookClubs", "DEMO_BOOKCLUB_1", "discussions", "DEMO_DISCUSSION_2", "comments", "DEMO_COMMENT_3"), {
   "moderator" : "B3JDEeG3ELPO3H9qJ0lXPIB2fWH3",
   "passage" : "56564",
   "text" : "633",
})



console.log("finished!")