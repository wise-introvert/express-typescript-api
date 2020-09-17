import express from "express";
import config from "config";

import { default as userAPI } from "./user";

const router: express.Router = express.Router();

router.use(config.get("routes.user.root"), userAPI);

export default router;
