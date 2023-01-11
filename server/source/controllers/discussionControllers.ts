/** source/controllers/posts.ts */
import { Request, Response, NextFunction } from 'express';
import { getDiscussionComments } from '../firebase/firebaseComments';
import { addDiscussionAgenda, addDiscussionParticipant, createDiscussionDocument, deleteDiscussionAgenda, deleteDiscussionDocument, getDiscussionAgenda, getDiscussionDocument, removeDiscussionParticipant, updateDiscussionAgenda, updateDiscussionDocument } from '../firebase/firebaseDiscussions';


const createDiscussion = async (req: Request, res: Response, next: NextFunction) => {
    let data = req.body
    const bookClubId = req.query.bookClubId;
    let result = null
    if (bookClubId) {
        result = await createDiscussionDocument(String(bookClubId), data)
    }
    return res.status(200).json({
        result
    })
}
const getDiscussion = async (req: Request, res: Response, next: NextFunction) => {
    const discussionId = req.query.discussionId
    const bookClubId = req.query.bookClubId
    let result = null
    if (bookClubId && discussionId) {
        result = await getDiscussionDocument(String(bookClubId), String(discussionId))
    }
    return res.status(200).json({
        result
    });
};
const updateDiscussion = async (req: Request, res: Response, next: NextFunction) => {
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
};
const deleteDiscussion = async (req: Request, res: Response, next: NextFunction) => {
    const discussionId = req.query.discussionId
    const bookClubId = req.query.bookClubId
    let result = null
    if (bookClubId && discussionId) {
        result = await deleteDiscussionDocument(String(bookClubId), String(discussionId))
    }
    return res.status(200).json({
        result
    });
};

const addParticipant = async (req: Request, res: Response, next: NextFunction) => {
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
};

const removeParticipant = async (req: Request, res: Response, next: NextFunction) => {
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
};

const createAgenda = async (req: Request, res: Response, next: NextFunction) => {
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
};

const getAgenda = async (req: Request, res: Response, next: NextFunction) => {
    const discussionId = req.query.discussionId
    const bookClubId = req.query.bookClubId

    let result = null
    if (bookClubId && discussionId) {
        result = await getDiscussionAgenda(String(bookClubId), String(discussionId))
    }
    return res.status(200).json({
        result
    });
};

const updateAgenda = async (req: Request, res: Response, next: NextFunction) => {
    const data = req.body
    const discussionId = req.query.discussionId
    const bookClubId = req.query.bookClubId

    let result = null
    if (bookClubId && discussionId) {
        result = await updateDiscussionAgenda(String(bookClubId), String(discussionId), data)
    }
    return res.status(200).json({
        result
    });
};

const deleteAgenda = async (req: Request, res: Response, next: NextFunction) => {
    const discussionId = req.query.discussionId
    const bookClubId = req.query.bookClubId

    let result = null
    if (bookClubId && discussionId) {
        result = await deleteDiscussionAgenda(String(bookClubId), String(discussionId))
    }
    return res.status(200).json({
        result
    });
};

const getAllComments = async (req: Request, res: Response, next: NextFunction) => {
    const discussionId = req.query.discussionId
    const bookClubId = req.query.bookClubId
    let result = null
    if (bookClubId && discussionId) {
        result = await getDiscussionComments(String(bookClubId), String(discussionId))
    }
    return res.status(200).json({
        result
    });
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