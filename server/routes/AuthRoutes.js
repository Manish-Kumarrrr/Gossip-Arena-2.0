import { Router } from "express";
import { onBoardUser, verifyUser } from "../controllers/AuthController.js";


const router = Router();

router.post("/verify-user",verifyUser);
router.post("/onboard-user",onBoardUser);

export default router;