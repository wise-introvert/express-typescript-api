import express from "express";
import config from "config";

const router: express.Router = express.Router();

router.get(
  config.get("routes.user.get"),
  (req: express.Request, res: express.Response) => {
    if (!req.query.name) {
      throw new Error("Invalid user name");
    } else {
      res.json({
        user: "John Doe"
      });
    }
  }
);

export default router;
