/** source/controllers/posts.ts */
import { Request, Response, NextFunction } from 'express';
import { checkAuth } from '../firebase/firebaseAuth';
import { createDiscussionDocument, deleteDiscussionDocument, getDiscussionDocument, updateDiscussionDocument } from '../firebase/firebaseDiscussions';
import { createResourceDocument, deleteResourceDocument, getResourceDocument, updateResourceDocument } from '../firebase/firebaseResource';


const createResource = async (req: Request, res: Response, next: NextFunction) => {
    if (checkAuth(req)) {
        let data = req.body
        const bookClubId = req.query.bookClubId;
        let result = null
        if (bookClubId) {
            result = await createResourceDocument(String(bookClubId), data)
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
const getResource = async (req: Request, res: Response, next: NextFunction) => {
    if (checkAuth(req)) {
        const resourceId = req.query.resourceId
        const bookClubId = req.query.bookClubId
        let result = null
        if (bookClubId && resourceId) {
            result = await getResourceDocument(String(bookClubId), String(resourceId))
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
const updateResource = async (req: Request, res: Response, next: NextFunction) => {
    if (checkAuth(req)) {
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
    } else {
        return res.status(200).json({
            "message" : "Frontend Auth key wrong or missing"
        })
    }
};
const deleteResource = async (req: Request, res: Response, next: NextFunction) => {
    if (checkAuth(req)) {
        const resourceId = req.query.resourceId
        const bookClubId = req.query.bookClubId
        let result = null
        if (bookClubId && resourceId) {
            result = await deleteResourceDocument(String(bookClubId), String(resourceId))
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

export default { createResource, getResource, updateResource, deleteResource };