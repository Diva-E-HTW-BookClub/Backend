/** source/controllers/posts.ts */
import { Request, Response, NextFunction } from 'express';
import { checkAuth, singInUser } from '../firebase/firebaseAuth';
import { addMember, createBookClubDocument, deleteBookClubDocument, getBookClubDocument, removeMember, searchBookClubDocuments, updateBookClubDocument } from '../firebase/firebaseBookClub';
import { firebaseDB } from '../firebase/firebaseConfig';


const createBookClub = async (req: Request, res: Response, next: NextFunction) => {
    if (checkAuth(req)) {
        let data = req.body

        let result = await createBookClubDocument(data) 
        return res.status(200).json({
            result
        })
    } else {
        return res.status(200).json({
            "message" : "Frontend Auth key wrong or missing"
        })
    }
}
const getBookClub = async (req: Request, res: Response, next: NextFunction) => {
    if (checkAuth(req)) {
        const bookClubId = req.query.bookClubId;
        let result = null
        if (bookClubId) {
            result = await getBookClubDocument(String(bookClubId))
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
const updateBookClub = async (req: Request, res: Response, next: NextFunction) => {
    if (checkAuth(req)) {
        const data = req.body
        const bookClubId = req.query.bookClubId;
        
        let result = null

        if (bookClubId) {
            result = await updateBookClubDocument(String(bookClubId), data)
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
const deleteBookClub = async (req: Request, res: Response, next: NextFunction) => {
    if (checkAuth(req)) {
        const bookClubId = req.query.bookClubId;
        let result = null

        if (bookClubId) {
            result = await deleteBookClubDocument(String(bookClubId))
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

// filter, memberId, includeMember and resultsLimit are mandatory. inputText and lastBookClubId are optional
const searchBookClubs = async (req: Request, res: Response, next: NextFunction) => {
    if (checkAuth(req)) {
        const filter = req.query.filter
        const inputText = req.query.inputText
        const memberId = req.query.memberId
        const resultsLimit = req.query.resultsLimit
        const lastBookClubId = req.query.lastBookClubId

        let includeMember: boolean = false
        if (req.query.includeMember === "true") {
            includeMember = true
        }

        let result = null
        if (filter && memberId && resultsLimit) {

            let inputTextString = String()
            if (inputText){
                inputTextString = String(inputText)
            }

            if (lastBookClubId != undefined) {
                result = await searchBookClubDocuments(String(filter), inputTextString, String(memberId), includeMember, Number(resultsLimit), String(lastBookClubId))
            } else {
                result = await searchBookClubDocuments(String(filter), inputTextString, String(memberId), includeMember, Number(resultsLimit))
            }
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

const addClubMember = async (req: Request, res: Response, next: NextFunction) => {
    if (checkAuth(req)) {
        const bookClubId = req.query.bookClubId;
        const memberId = req.query.memberId;
        let result = null

        if (bookClubId && memberId) {
            result = await addMember(String(bookClubId), String(memberId))
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

const removeClubMember = async (req: Request, res: Response, next: NextFunction) => {
    if (checkAuth(req)) {
        const bookClubId = req.query.bookClubId;
        const memberId = req.query.memberId;
        let result = null

        if (bookClubId && memberId) {
            result = await removeMember(String(bookClubId), String(memberId))
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

export default { createBookClub, getBookClub, updateBookClub, deleteBookClub, searchBookClubs, addClubMember, removeClubMember };