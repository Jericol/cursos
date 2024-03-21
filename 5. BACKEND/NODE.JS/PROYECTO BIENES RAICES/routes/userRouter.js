import express from "express";
import { formLogin } from "../controllers/userControllers.js";

const router = express.Router();

router.get("/login", formLogin)



export default router;