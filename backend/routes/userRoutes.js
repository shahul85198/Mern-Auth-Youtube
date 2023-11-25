import express from "express";
import { authUser, getUserProfile, logoutUser, updateUserProfile } from "../controllers/userController";
const router = express.Router();

router.post('/', authUser);
router.post('/auth', authUser);
router.post('/auth', logoutUser);
router.post('/profile').get(getUserProfile).put(updateUserProfile);

export default router