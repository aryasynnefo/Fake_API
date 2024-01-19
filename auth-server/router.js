import { Router } from "express";

import * as controller from "./controller.js";
import Auth from "./Middlewares/auth.js";

const router = Router();

router.route("/register").post(controller.registerUser);
router.route("/login").post(controller.loginUser);
router.route("/fetch").get(Auth, controller.Get);

export default router;