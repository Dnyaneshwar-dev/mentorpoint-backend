import express from "express";
import { addSession } from "../controllers/session/addSessions.js";
import { getSessions } from "../controllers/session/getSessions.js";

const SessionRouter = express.Router();

SessionRouter.post("/get", getSessions);
SessionRouter.post("/add", addSession);

export { SessionRouter };
