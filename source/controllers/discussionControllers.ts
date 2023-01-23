/** source/controllers/posts.ts */
import { Request, Response, NextFunction } from 'express';
import { checkAuth } from '../firebase/firebaseAuth';
import { getDiscussionComments } from '../firebase/firebaseComments';
import { addDiscussionAgenda, addDiscussionParticipant, createDiscussionDocument, deleteDiscussionAgenda, deleteDiscussionDocument, getDiscussionAgenda, getDiscussionDocument, removeDiscussionParticipant, updateDiscussionAgenda, updateDiscussionDocument } from '../firebase/firebaseDiscussions';


const createDiscussion = async (req: Request, res: Response, next: NextFunction) => {
    if (checkAuth(req)) {
        let data = req.body
        const bookClubId = req.query.bookClubId;
        let result = null
        if (bookClubId) {
            result = await createDiscussionDocument(String(bookClubId), data)
        }
        return res.status(200).json({
            result
        });
    } else {
        return res.status(200).json({
            "message" : "Frontend Auth key wrong or missing"
        })
    }
}
const getDiscussion = async (req: Request, res: Response, next: NextFunction) => {
    if (checkAuth(req)) {
        const discussionId = req.query.discussionId
        const bookClubId = req.query.bookClubId
        let result = null
        if (bookClubId && discussionId) {
            result = await getDiscussionDocument(String(bookClubId), String(discussionId))
        }
        return res.status(200).json({
            result
        });
    } else {
        return res.status(200).json({
            "message" : "Frontend Auth key wrong or missing"
        })
    }
};
const updateDiscussion = async (req: Request, res: Response, next: NextFunction) => {
    if (checkAuth(req)) {
        let data = req.body
        const discussionId = req.query.discussionId
        const bookClubId = req.query.bookClubId
        let result = null
        if (bookClubId && discussionId) {
            result = await updateDiscussionDocument(String(bookClubId), String(discussionId), data)
        }
        return res.status(200).json({
            result
        });
    } else {
        return res.status(200).json({
            "message" : "Frontend Auth key wrong or missing"
        })
    }
};
const deleteDiscussion = async (req: Request, res: Response, next: NextFunction) => {
    if (checkAuth(req)) {
        const discussionId = req.query.discussionId
        const bookClubId = req.query.bookClubId
        let result = null
        if (bookClubId && discussionId) {
            result = await deleteDiscussionDocument(String(bookClubId), String(discussionId))
        }
        return res.status(200).json({
            result
        });
    } else {
        return res.status(200).json({
            "message" : "Frontend Auth key wrong or missing"
        })
    }
};

const addParticipant = async (req: Request, res: Response, next: NextFunction) => {
    if (checkAuth(req)) {
        const discussionId = req.query.discussionId
        const bookClubId = req.query.bookClubId
        const participantId = req.query.participantId
        let result = null
        if (bookClubId && discussionId && participantId) {
            result = await addDiscussionParticipant(String(bookClubId), String(discussionId), String(participantId))
        }
        return res.status(200).json({
            result
        });
    } else {
        return res.status(200).json({
            "message" : "Frontend Auth key wrong or missing"
        })
    }
};

const removeParticipant = async (req: Request, res: Response, next: NextFunction) => {
    if (checkAuth(req)) {
        const discussionId = req.query.discussionId
        const bookClubId = req.query.bookClubId
        const participantId = req.query.participantId
        let result = null
        if (bookClubId && discussionId && participantId) {
            result = await removeDiscussionParticipant(String(bookClubId), String(discussionId), String(participantId))
        }
        return res.status(200).json({
            result
        });
    } else {
        return res.status(200).json({
            "message" : "Frontend Auth key wrong or missing"
        })
    }
};

const createAgenda = async (req: Request, res: Response, next: NextFunction) => {
    if (checkAuth(req)) {
        const data = req.body
        const discussionId = req.query.discussionId
        const bookClubId = req.query.bookClubId

        let result = null
        if (bookClubId && discussionId) {
            result = await addDiscussionAgenda(String(bookClubId), String(discussionId), data)
        }
        return res.status(200).json({
            result
        });
    } else {
        return res.status(200).json({
            "message" : "Frontend Auth key wrong or missing"
        })
    }
};

const getAgenda = async (req: Request, res: Response, next: NextFunction) => {
    if (checkAuth(req)) {
        const discussionId = req.query.discussionId
        const bookClubId = req.query.bookClubId

        let result = null
        if (bookClubId && discussionId) {
            result = await getDiscussionAgenda(String(bookClubId), String(discussionId))
        }
        return res.status(200).json({
            result
        });
    } else {
        return res.status(200).json({
            "message" : "Frontend Auth key wrong or missing"
        })
    }
};

const updateAgenda = async (req: Request, res: Response, next: NextFunction) => {
    if (checkAuth(req)) {
        const discussionId = req.query.discussionId
        const bookClubId = req.query.bookClubId
        const amountOfChapter = req.query.amountOfChapter
        const elapsedTimes = req.query.elapsedTimes?.toString() || ""
        const names = req.query.names?.toString() || ""
        const timeLimits = req.query.timeLimits?.toString() ||""
        const maxParticipants = req.query.maxParticipants
        const saveArchive: boolean = req.query.saveArchive === "true" || req.query.saveArchive === "True"

        let result = null
        if (bookClubId && discussionId) {
            result = await updateDiscussionAgenda(
                String(bookClubId),
                String(discussionId),
                Number(amountOfChapter), 
                JSON.parse(elapsedTimes), 
                JSON.parse(names), 
                JSON.parse(timeLimits), 
                Number(maxParticipants), Boolean(saveArchive))
        }
        return res.status(200).json({
            result
        });
    } else {
        return res.status(200).json({
            "message" : "Frontend Auth key wrong or missing"
        })
    }
};

const deleteAgenda = async (req: Request, res: Response, next: NextFunction) => {
    if (checkAuth(req)) {
        const discussionId = req.query.discussionId
        const bookClubId = req.query.bookClubId

        let result = null
        if (bookClubId && discussionId) {
            result = await deleteDiscussionAgenda(String(bookClubId), String(discussionId))
        }
        return res.status(200).json({
            result
        });
    } else {
        return res.status(200).json({
            "message" : "Frontend Auth key wrong or missing"
        })
    }
};

const getAllComments = async (req: Request, res: Response, next: NextFunction) => {
    if (checkAuth(req)) {
        const discussionId = req.query.discussionId
        const bookClubId = req.query.bookClubId
        let result = null
        if (bookClubId && discussionId) {
            result = await getDiscussionComments(String(bookClubId), String(discussionId))
        }
        return res.status(200).json({
            result
        });
    } else {
        return res.status(200).json({
            "message" : "Frontend Auth key wrong or missing"
        })
    }
};





export default { 
    createDiscussion, 
    getDiscussion, 
    updateDiscussion, 
    deleteDiscussion, 
    addParticipant, 
    removeParticipant, 
    createAgenda, 
    getAgenda, 
    updateAgenda, 
    deleteAgenda,
    getAllComments
};