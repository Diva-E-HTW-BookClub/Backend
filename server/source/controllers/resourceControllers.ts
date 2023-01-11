/** source/controllers/posts.ts */
import { Request, Response, NextFunction } from 'express';
import { createDiscussionDocument, deleteDiscussionDocument, getDiscussionDocument, updateDiscussionDocument } from '../firebase/firebaseDiscussions';
import { createResourceDocument, deleteResourceDocument, getResourceDocument, updateResourceDocument } from '../firebase/firebaseResource';


const createResource = async (req: Request, res: Response, next: NextFunction) => {
    let data = req.body
    const bookClubId = req.query.bookClubId;
    let result = null
    if (bookClubId) {
        result = await createResourceDocument(String(bookClubId), data)
    }
    return res.status(200).json({
        result
    })
}
const getResource = async (req: Request, res: Response, next: NextFunction) => {
    const resourceId = req.query.resourceId
    const bookClubId = req.query.bookClubId
    let result = null
    if (bookClubId && resourceId) {
        result = await getResourceDocument(String(bookClubId), String(resourceId))
    }
    return res.status(200).json({
        result
    });
};
const updateResource = async (req: Request, res: Response, next: NextFunction) => {
    const data = req.body
    const resourceId = req.query.resourceId
    const bookClubId = req.query.bookClubId
    let result = null
    if (bookClubId && resourceId) {
        result = await updateResourceDocument(String(bookClubId), String(resourceId), data)
    }
    return res.status(200).json({
        result
    });
};
const deleteResource = async (req: Request, res: Response, next: NextFunction) => {
    const resourceId = req.query.resourceId
    const bookClubId = req.query.bookClubId
    let result = null
    if (bookClubId && resourceId) {
        result = await deleteResourceDocument(String(bookClubId), String(resourceId))
    }
    return res.status(200).json({
        result
    });
};

export default { createResource, getResource, updateResource, deleteResource };