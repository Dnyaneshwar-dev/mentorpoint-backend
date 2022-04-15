import express from "express";
import { addOpportunities } from "../controllers/opportunities/addOpportunities.js";
import { deleteOpportunities } from "../controllers/opportunities/deleteOpportunities.js";
import { getOpportunities } from "../controllers/opportunities/getOpportunities.js";
import { updateOpportunities } from "../controllers/opportunities/updateOpportunities.js";

const OpportunitiesRouter = express.Router();

OpportunitiesRouter.get("/", getOpportunities);
OpportunitiesRouter.post("/", addOpportunities);
OpportunitiesRouter.put("/", updateOpportunities);
OpportunitiesRouter.delete("/", deleteOpportunities);

export { OpportunitiesRouter };
