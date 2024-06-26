import { Router } from "express";
import { getAllUsers, onBoardUser, verifyUser } from "../controllers/AuthController.js";


const router = Router();

router.post("/verify-user",verifyUser);
router.post("/onboard-user",onBoardUser);
router.get("/get-contacts",getAllUsers)

export default router;