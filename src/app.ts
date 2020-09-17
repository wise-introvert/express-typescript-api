import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import dotenv from "dotenv";
import config from "config";

import * as middlewares from "./middlewares";
import api from "./api";

dotenv.config();
const app = express();

// MIDDLEWARES
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get("/", (req: express.Request, res: express.Response) => {
  res.json({
    message: "🦄🌈✨👋🌎🌍🌏✨🌈🦄"
  });
});

// ROUTES
app.use(config.get("routes.root"), api);

// MIDDLEWARES
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

export default app;
