import { Request, Response } from 'express';
import { checkAuth, getUsername, saveUser } from '../firebase/firebaseAuth';

const getProfileUsername = async (req: Request, res: Response) => {
    if (checkAuth(req)) {
        const userId = req.query.userId
        if (userId != null) {
            let result = await getUsername(String(userId))
            return res.status(200).json({
                username: result
            })
        } else {
            return res.status(400).json({
                "message": "User id is missing"
            })
        }
    } else {
        return res.status(200).json({
            "message": "Frontend Auth key wrong or missing"
        })
    }
}

const saveProfileUsername = async (req: Request, res: Response) => {
    if (checkAuth(req)) {
        const userId = req.query.userId
        const username = req.body.username
        if (userId != null && username != null) {
            await saveUser(String(userId), String(username))
            return res.status(200)
        } else {
            return res.status(400).json({
                "message": "User id or username is missing"
            })
        }
    } else {
        return res.status(200).json({
            "message": "Frontend Auth key wrong or missing"
        })
    }
}

export default { getProfileUsername, saveProfileUsername };