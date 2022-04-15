import { addSlots } from "../controllers/slots/addSlots.js";
import { getSlots } from "../controllers/slots/getSlots.js";
import { updateSlots } from "../controllers/slots/updateSlots.js";
import { deleteSlots } from "../controllers/slots/deleteSlots.js";
import express from "express";

const SlotsRouter = express.Router();

SlotsRouter.get("/", getSlots);
SlotsRouter.post("/", addSlots);
SlotsRouter.put("/", updateSlots);
SlotsRouter.delete("/", deleteSlots);

export { SlotsRouter };
