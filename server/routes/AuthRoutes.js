import { Router } from "express";
import { verifyUser } from "../controllers/AuthController.js";


const router = Router();

router.post("/verify-user",verifyUser);

export default router;