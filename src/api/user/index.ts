import express from "express";
import config from "config";

const router: express.Router = express.Router();

router.get(
  config.get("routes.user.get"),
  (req: express.Request, res: express.Response) => {
    res.json({
      user: "John Doe"
    });
  }
);

export default router;
