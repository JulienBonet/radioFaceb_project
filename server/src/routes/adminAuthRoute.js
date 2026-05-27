// server/src/routes/adminAuthRoute.js
import express from "express";
import { loginAdmin } from "../controller/adminAuthController.js";

const router = express.Router();

router.post("/login", loginAdmin);

export default router;