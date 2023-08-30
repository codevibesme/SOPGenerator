import express from "express";
import { sendSop } from "../controllers/sop.js";

const router = express.Router();

router.post("/generate", sendSop);

export default router;