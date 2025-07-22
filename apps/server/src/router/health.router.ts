import { Router } from "express";
import { health } from "../controller/health.controller";

const router = Router();

router.get("/check", health);

export default router;