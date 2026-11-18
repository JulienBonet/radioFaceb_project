// server/src/routes/adminAuthRoute.js
import express from "express";
import { loginAdmin } from "../controller/adminAuthController.js";
import { adminLoginRateLimit } from "../middleware/adminLoginRateLimit.js";

const router = express.Router();

router.post("/login", adminLoginRateLimit, loginAdmin);

export default router;