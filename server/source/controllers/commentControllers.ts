/** source/controllers/posts.ts */
import { Request, Response, NextFunction } from 'express';
import { createCommentDocument, deleteCommentDocument, getCommentDocument, updateCommentDocument } from '../firebase/firebaseComments';


const createComment = async (req: Request, res: Response, next: NextFunction) => {
    const data = req.body
    const bookClubId = req.query.bookClubId;
    const discussionId = req.query.discussionId
    let result = null
    if (bookClubId && discussionId) {
        result = await createCommentDocument(String(bookClubId), String(discussionId), data)
    }
    return res.status(200).json({
        result
    })
}
const getComment = async (req: Request, res: Response, next: NextFunction) => {
    const bookClubId = req.query.bookClubId;
    const discussionId = req.query.discussionId
    const commentId = req.query.commentId

    let result = null
    if (bookClubId && discussionId && commentId) {
        result = await getCommentDocument(String(bookClubId), String(discussionId), String(commentId))
    }
    return res.status(200).json({
        result
    });
};
const updateComment = async (req: Request, res: Response, next: NextFunction) => {
    let data = req.body
    const bookClubId = req.query.bookClubId;
    const discussionId = req.query.discussionId
    const commentId = req.query.commentId
    let result = null
    if (bookClubId && discussionId && commentId) {
        result = await updateCommentDocument(String(bookClubId), String(discussionId), String(commentId), data)
    }
    return res.status(200).json({
        result
    });
};
const deleteComment = async (req: Request, res: Response, next: NextFunction) => {
    const bookClubId = req.query.bookClubId;
    const discussionId = req.query.discussionId
    const commentId = req.query.commentId
    let result = null
    if (bookClubId && discussionId && commentId) {
        result = await deleteCommentDocument(String(bookClubId), String(discussionId), String(commentId))
    }
    return res.status(200).json({
        result
    });
};







export default { createComment, getComment, updateComment, deleteComment };