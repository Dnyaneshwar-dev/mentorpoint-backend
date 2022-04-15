import express from "express";
import { addSessions } from "../controllers/sessions/addSessions.js";
import { deleteSessions } from "../controllers/sessions/deleteSessions.js";
import { getSessions } from "../controllers/sessions/getSessions.js";
import { updateSessions } from "../controllers/sessions/updateSessions.js";

const SessionRouter = express.Router();

SessionRouter.get("/", getSessions);
SessionRouter.post("/", addSessions);
SessionRouter.put("/", updateSessions);
SessionRouter.delete("/", deleteSessions);

export { SessionRouter };
