import { doc, setDoc } from "firebase/firestore";
import { createBookClubDocument, generateKeywords } from "../firebase/firebaseBookClub";
import { firebaseDB } from "../firebase/firebaseConfig";
import { createDiscussionDocument } from "../firebase/firebaseDiscussions";


console.log("starting population!")

// Create Club - George Orwell
var data1: any = {
   "book" : {
      "authors" : ["George Orwell"],
      "imageUrl" : "https://covers.openlibrary.org/b/id/9267242-M.jpg",
      "title" : "Nineteen Eighty-Four"
   },
   "discussions" : [],
   "id" : "",
   "maxMemberNumber" : 25,
   "members" : ["veWL8aeAVkWtiEKdM3pmeJ9ucBF3", "pCEzMIeStFZ3ihGnOXBYu2LJ6bg2", "D9m0RGJ0hRghKDtXRKBKq9PiueE3"],
   "moderator" : ["veWL8aeAVkWtiEKdM3pmeJ9ucBF3"],
   "name" : "Class 4A - School Reading",
   "owner" : "veWL8aeAVkWtiEKdM3pmeJ9ucBF3",
   "resources" : []
}
data1.keywords = generateKeywords(data1)
setDoc(doc(firebaseDB, "bookClubs", "DEMO_BOOKCLUB_1"), data1)
setDoc(doc(firebaseDB, "bookClubs", "DEMO_BOOKCLUB_1", "discussions", "DEMO_DISCUSSION_0"), {
   "date" : "2023-02-14T12:00:00.000Z",
   "endTime" : "2023-02-14T13:00:00.000Z",
   "location" : "Theodor-Heuss-Bibliothek - Makerspace",
   "moderator" : "veWL8aeAVkWtiEKdM3pmeJ9ucBF3",
   "participants" : ["veWL8aeAVkWtiEKdM3pmeJ9ucBF3"],
   "startTime" : "2023-02-14T12:00:00.000Z",
   "title" : "Chapter 1",
})
setDoc(doc(firebaseDB, "bookClubs", "DEMO_BOOKCLUB_1", "discussions", "DEMO_DISCUSSION_1"), {
   "date" : "2023-02-16T12:00:00.000Z",
   "endTime" : "2023-02-16T13:00:00.000Z",
   "location" : "Theodor-Heuss-Bibliothek - Makerspace",
   "moderator" : "veWL8aeAVkWtiEKdM3pmeJ9ucBF3",
   "participants" : ["veWL8aeAVkWtiEKdM3pmeJ9ucBF3"],
   "startTime" : "2023-02-16T12:00:00.000Z",
   "title" : "Chapter 2",
})
setDoc(doc(firebaseDB, "bookClubs", "DEMO_BOOKCLUB_1", "discussions", "DEMO_DISCUSSION_2"), {
   "date" : "2023-02-21T12:00:00.000Z",
   "endTime" : "2023-02-21T13:00:00.000Z",
   "location" : "Theodor-Heuss-Bibliothek - Makerspace",
   "moderator" : "B3JDEeG3ELPO3H9qJ0lXPIB2fWH3",
   "participants" : ["veWL8aeAVkWtiEKdM3pmeJ9ucBF3"],
   "startTime" : "2023-02-21T12:00:00.000Z",
   "title" : "Chapter 3",
})
setDoc(doc(firebaseDB, "bookClubs", "DEMO_BOOKCLUB_1", "discussions", "DEMO_DISCUSSION_0", "comments", "DEMO_COMMENT_1"), {
   "moderator" : "veWL8aeAVkWtiEKdM3pmeJ9ucBF3",
   "passage" : "",
   "text" : "Im really looking forward to our first discussion! Please make sure that you have read the chapter in advance.",
})
setDoc(doc(firebaseDB, "bookClubs", "DEMO_BOOKCLUB_1", "discussions", "DEMO_DISCUSSION_1", "comments", "DEMO_COMMENT_2"), {
   "moderator" : "veWL8aeAVkWtiEKdM3pmeJ9ucBF3",
   "passage" : "",
   "text" : "Thank you for the last discussion! Im really looking forward to our next discussion, I hope there will be as much discussion going on as last time!",
})

// Create Club - Brothers Grim
var data2: any = {
   "book" : {
      "authors" : ["Brothers Grimm"],
      "imageUrl" : "https://covers.openlibrary.org/b/id/2241363-M.jpg",
      "title" : "Grimms Märchen"
   },
   "discussions" : [],
   "id" : "",
   "maxMemberNumber" : 10,
   "members" : ["p9ldr06SFXSD3jcNa1wAV5tScfP2", "veWL8aeAVkWtiEKdM3pmeJ9ucBF3"],
   "moderator" : ["p9ldr06SFXSD3jcNa1wAV5tScfP2"],
   "name" : "Die Märchenstunde ",
   "owner" : "p9ldr06SFXSD3jcNa1wAV5tScfP2",
   "resources" : []
}
data2.keywords = generateKeywords(data2)
setDoc(doc(firebaseDB, "bookClubs", "DEMO_BOOKCLUB_2"), data2)
setDoc(doc(firebaseDB, "bookClubs", "DEMO_BOOKCLUB_2", "discussions", "DEMO_DISCUSSION_2"), {
   "agenda" : [ 
      {
         elapsedTime : 0,
         name : "Ist der Frosch übergriffig?",
         timeLimit : 240
      },
      {
         elapsedTime : 0,
         name : "Ist der Prinz als Frosch sympathischer?",
         timeLimit : 300,
      },
      {
         elapsedTime : 0,
         name : "Moral: Froschkönig",
         timeLimit : 480,
      },
      {
         elapsedTime : 0,
         name : "Hans: Das Glück mit den Dummen",
         timeLimit : 360,
      },
      {
         elapsedTime : 0,
         name : "Metaphern über Glück und Fleiss",
         timeLimit : 60,
      },
      {
         elapsedTime : 0,
         name : "Moral: Hans im Glück",
         timeLimit : 600,
      }
   ],
   "date" : "2023-02-14T18:00:00.000Z",
   "endTime" : "2023-02-14T19:00:00.000Z",
   "location" : "Online: Zoom-Meeting ",
   "moderator" : "p9ldr06SFXSD3jcNa1wAV5tScfP2",
   "participants" : ["veWL8aeAVkWtiEKdM3pmeJ9ucBF3"],
   "startTime" : "2023-02-14T18:00:00.000Z",
   "title" : "Der Froschkönig / Hans im Glück",
})

// Create Club - Robert McKee
var data3:any = {
   "book" : {
      "authors" : ["Robert McKee"],
      "imageUrl" : "https://covers.openlibrary.org/b/id/38437-M.jpg",
      "title" : "Story"
   },
   "discussions" : [],
   "id" : "",
   "maxMemberNumber" : 30,
   "members" : ["p9ldr06SFXSD3jcNa1wAV5tScfP2"],
   "moderator" : ["p9ldr06SFXSD3jcNa1wAV5tScfP2"],
   "name" : "Talking about Storywriting",
   "owner" : "p9ldr06SFXSD3jcNa1wAV5tScfP2",
   "resources" : []
}
data3.keywords = generateKeywords(data3)
setDoc(doc(firebaseDB, "bookClubs", "DEMO_BOOKCLUB_3"), data3)
setDoc(doc(firebaseDB, "bookClubs", "DEMO_BOOKCLUB_3", "discussions", "DEMO_DISCUSSION_3"), {
   "agenda" : [ 
      {
         elapsedTime : 0,
         name : "Struktur und Setting",
         timeLimit : 1800
      },
      {
         elapsedTime : 0,
         name : "Struktur und Figur",
         timeLimit : 600,
      },
      {
         elapsedTime : 0,
         name : "Struktur und Genre",
         timeLimit : 1800,
      },
      {
         elapsedTime : 0,
         name : "Struktur und Bedeutung",
         timeLimit : 2400,
      },
      {
         elapsedTime : 0,
         name : "Offene Fragen",
         timeLimit : 120,
      }
   ],
   "date" : "2023-03-09T12:00:00.000Z",
   "endTime" : "2023-03-09T14:00:00.000Z",
   "location" : "Burgunderstraße 3, 28789 Bremen",
   "moderator" : "p9ldr06SFXSD3jcNa1wAV5tScfP2",
   "participants" : ["p9ldr06SFXSD3jcNa1wAV5tScfP2"],
   "startTime" : "2023-03-09T12:00:00.000Z",
   "title" : "Die Story-Elemente",
})
setDoc(doc(firebaseDB, "bookClubs", "DEMO_BOOKCLUB_3", "discussions", "DEMO_DISCUSSION_4"), {
   "agenda" : [ 
      {
         elapsedTime : 0,
         name : "Szenen-Design",
         timeLimit : 300
      },
      {
         elapsedTime : 0,
         name : "Komposition",
         timeLimit : 600,
      },
      {
         elapsedTime : 0,
         name : "Szenenanalyse",
         timeLimit : 600,
      },
      {
         elapsedTime : 0,
         name : "Offene Fragen",
         timeLimit : 60,
      }
   ],
   "date" : "2024-01-05T08:00:00.000Z",
   "endTime" : "2024-01-05T08:45:00.000Z",
   "location" : "Burgunderstraße 3, 28789 Bremen",
   "moderator" : "p9ldr06SFXSD3jcNa1wAV5tScfP2",
   "participants" : [],
   "startTime" : "2024-01-05T08:00:00.000Z",
   "title" : "Prinzipien des Story-Designs",
})

// Create Club - Club Schaarschmidt
var data4: any = {
   "book" : {
      "authors" : ["Oscar Wilde"],
      "imageUrl" : "https://covers.openlibrary.org/b/id/10469437-M.jpg",
      "title" : "The Picture of Dorian Gray"
   },
   "discussions" : [],
   "id" : "",
   "maxMemberNumber" : 8,
   "members" : ["D9m0RGJ0hRghKDtXRKBKq9PiueE3"],
   "moderator" : ["D9m0RGJ0hRghKDtXRKBKq9PiueE3"],
   "name" : "Club Schaarschmidt",
   "owner" : "D9m0RGJ0hRghKDtXRKBKq9PiueE3",
   "resources" : []
}
data4.keywords = generateKeywords(data4)
setDoc(doc(firebaseDB, "bookClubs", "DEMO_BOOKCLUB_4"), data4)
setDoc(doc(firebaseDB, "bookClubs", "DEMO_BOOKCLUB_4", "discussions", "DEMO_DISCUSSION_5"), {
   "agenda" : [ 
      {
         elapsedTime : 0,
         name : "Meeting Dorian Gray",
         timeLimit : 900
      },
      {
         elapsedTime : 0,
         name : "Lord Harry and the music",
         timeLimit : 600,
      },
      {
         elapsedTime : 0,
         name : "Talking with Basil",
         timeLimit : 300,
      },
      {
         elapsedTime : 0,
         name : "Harry describing Mr. Gray",
         timeLimit : 600,
      }
   ],
   "date" : "2023-02-10T12:30:00.000Z",
   "endTime" : "2023-02-10T13:30:00.000Z",
   "location" : "Strandbad Weissensee, 13088 Berlin Weissensee",
   "moderator" : "D9m0RGJ0hRghKDtXRKBKq9PiueE3",
   "participants" : ["D9m0RGJ0hRghKDtXRKBKq9PiueE3"],
   "startTime" : "2023-02-10T12:30:00.000Z",
   "title" : "Chapter II",
})
setDoc(doc(firebaseDB, "bookClubs", "DEMO_BOOKCLUB_4", "discussions", "DEMO_DISCUSSION_5", "comments", "DEMO_COMMENT_3"), {
   "moderator" : "D9m0RGJ0hRghKDtXRKBKq9PiueE3",
   "passage" : "",
   "text" : "On this page I feel like Dorian Gray is opening up to Lord Harry, don't you think?",
})
setDoc(doc(firebaseDB, "bookClubs", "DEMO_BOOKCLUB_4", "discussions", "DEMO_DISCUSSION_6"), {
   "agenda" : [ 
      {
         elapsedTime : 0,
         name : "Introduction",
         timeLimit : 300
      },
      {
         elapsedTime : 0,
         name : "Who is Dorian Gray?",
         timeLimit : 900,
      },
      {
         elapsedTime : 0,
         name : "Who is Lord Harry?",
         timeLimit : 900,
      },
      {
         elapsedTime : 0,
         name : "About their Relationship",
         timeLimit : 1200,
      }
   ],
   "date" : "2023-02-09T15:00:00.000Z",
   "endTime" : "2023-02-09T16:00:00.000Z",
   "location" : "Strandbad Weissensee, 13088 Berlin Weissensee",
   "moderator" : "D9m0RGJ0hRghKDtXRKBKq9PiueE3",
   "participants" : ["D9m0RGJ0hRghKDtXRKBKq9PiueE3"],
   "startTime" : "2023-02-09T15:00:00.000Z",
   "title" : "Chapter I",
})
setDoc(doc(firebaseDB, "bookClubs", "DEMO_BOOKCLUB_4", "discussions", "DEMO_DISCUSSION_6", "comments", "DEMO_COMMENT_4"), {
   "moderator" : "D9m0RGJ0hRghKDtXRKBKq9PiueE3",
   "passage" : "'Yes, I am glad now. I wonder shall I always be glad?' ~ Oscar Wilde",
   "text" : "Thank you for this wonderful discussion. Everyone! See you next time. And here is a little something I would say about our last discussion with Oscars words ☺️:",
})
setDoc(doc(firebaseDB, "bookClubs", "DEMO_BOOKCLUB_4", "discussions", "DEMO_DISCUSSION_7"), {
   "agenda" : [ 
      {
         elapsedTime : 0,
         name : "Total Discussion",
         timeLimit : 3600
      }
   ],
   "date" : "2024-01-04T15:00:00.000Z",
   "endTime" : "2024-01-04T16:00:00.000Z",
   "location" : "Wolfdietrich-Schnurre-Bibliothek, 13088 Berlin Weissensee",
   "moderator" : "D9m0RGJ0hRghKDtXRKBKq9PiueE3",
   "participants" : ["D9m0RGJ0hRghKDtXRKBKq9PiueE3"],
   "startTime" : "2024-01-04T15:00:00.000Z",
   "title" : "Chapter XII",
})
setDoc(doc(firebaseDB, "bookClubs", "DEMO_BOOKCLUB_4", "resources", "DEMO_RESOURCE_1"), {
  "content" : "https://htw-berlin.zoom.us/j/98892103532?pwd=RXpyRVZnN0hUQlVsSE1yY0JTcDZMdz09",
  "moderator" : "D9m0RGJ0hRghKDtXRKBKq9PiueE3",
  "title" : "Zoom Link"
})
setDoc(doc(firebaseDB, "bookClubs", "DEMO_BOOKCLUB_4", "resources", "DEMO_RESOURCE_2"), {
   "content" : "https://www.thalia.de/shop/home/artikeldetails/A1003051496",
   "moderator" : "D9m0RGJ0hRghKDtXRKBKq9PiueE3",
   "title" : "Buy the Book here"
})

// Create CLub - Queens
var data5: any = {
   "book" : {
      "authors" : ["Stephen King"],
      "imageUrl" : "https://covers.openlibrary.org/b/id/7013717-M.jpg",
      "title" : "The Shining"
   },
   "discussions" : [],
   "id" : "",
   "maxMemberNumber" : 20,
   "members" : ["gmlAEwJgRoRTkZPZsvjy9ISUDKp1"],
   "moderator" : ["gmlAEwJgRoRTkZPZsvjy9ISUDKp1"],
   "name" : "Queens",
   "owner" : "gmlAEwJgRoRTkZPZsvjy9ISUDKp1",
   "resources" : []
}
data5.keywords = generateKeywords(data5)
setDoc(doc(firebaseDB, "bookClubs", "DEMO_BOOKCLUB_5"), data5)
setDoc(doc(firebaseDB, "bookClubs", "DEMO_BOOKCLUB_5", "discussions", "DEMO_DISCUSSION_8"), {
   "agenda" : [ 
      {
         elapsedTime : 0,
         name : "Total Discussion",
         timeLimit : 3600
      }
   ],
   "date" : "2023-02-13T11:00:00.000Z",
   "endTime" : "2023-02-13T12:00:00.000Z",
   "location" : "online",
   "moderator" : "gmlAEwJgRoRTkZPZsvjy9ISUDKp1",
   "participants" : [],
   "startTime" : "2023-02-13T11:00:00.000Z",
   "title" : "Chapter 2",
})

// Create Club - Berliner Club
var data6: any = {
   "book" : {
      "authors" : ["Fumitake Koga Ichiro Kishimi"],
      "imageUrl" : "https://covers.openlibrary.org/b/id/10328389-M.jpg",
      "title" : "Courage To Be Disliked"
   },
   "discussions" : [],
   "id" : "",
   "maxMemberNumber" : 10,
   "members" : ["Jth1mwl14vTkaYuFrr8hFkIOxpS2"],
   "moderator" : ["Jth1mwl14vTkaYuFrr8hFkIOxpS2"],
   "name" : "berliner club",
   "owner" : "Jth1mwl14vTkaYuFrr8hFkIOxpS2",
   "resources" : [],
}
data6.keywords = generateKeywords(data6)
setDoc(doc(firebaseDB, "bookClubs", "DEMO_BOOKCLUB_6"), data6)
setDoc(doc(firebaseDB, "bookClubs", "DEMO_BOOKCLUB_6", "discussions", "DEMO_DISCUSSION_9"), {
   "agenda" : [ 
      {
         elapsedTime : 0,
         name : "Total Discussion",
         timeLimit : 3600
      }
   ],
   "date" : "2023-02-28T12:00:00.000Z",
   "endTime" : "2023-02-28T13:00:00.000Z",
   "location" : "htw Gebäude C233",
   "moderator" : "Jth1mwl14vTkaYuFrr8hFkIOxpS2",
   "participants" : [],
   "startTime" : "2023-02-28T12:00:00.000Z",
   "title" : "Introduction ",
})
console.log("finished!")