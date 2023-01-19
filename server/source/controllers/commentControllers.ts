/** source/controllers/posts.ts */
import { Request, Response, NextFunction } from 'express';
import { checkAuth } from '../firebase/firebaseAuth';
import { createCommentDocument, deleteCommentDocument, getCommentDocument, updateCommentDocument } from '../firebase/firebaseComments';


const createComment = async (req: Request, res: Response, next: NextFunction) => {
    if (checkAuth(req)) {
        const data = req.body
        const bookClubId = req.query.bookClubId;
        const discussionId = req.query.discussionId;
        let result = null
        if (bookClubId && discussionId) {
            result = await createCommentDocument(String(bookClubId), String(discussionId), data)
        }
        return res.status(200).json({
            result
        })
    } else {
        return res.status(200).json({
            "message" : "Frontend Auth key wrong or missing"
        })
    }
}
const getComment = async (req: Request, res: Response, next: NextFunction) => {
    if (checkAuth(req)) {
        const bookClubId = req.query.bookClubId;
        const discussionId = req.query.discussionId
        const commentId = req.query.commentId

        let result = null
        if (bookClubId && discussionId && commentId) {
            result = await getCommentDocument(String(bookClubId), String(discussionId), String(commentId))
        }
        return res.status(200).json({
            result
        })
    } else {
        return res.status(200).json({
            "message" : "Frontend Auth key wrong or missing"
        })
    }
};
const updateComment = async (req: Request, res: Response, next: NextFunction) => {
    if (checkAuth(req)) {
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
        })
    } else {
        return res.status(200).json({
            "message" : "Frontend Auth key wrong or missing"
        })
    }
};
const deleteComment = async (req: Request, res: Response, next: NextFunction) => {
    if (checkAuth(req)) {
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
    } else {
        return res.status(200).json({
            "message" : "Frontend Auth key wrong or missing"
        })
    }
};







export default { createComment, getComment, updateComment, deleteComment };