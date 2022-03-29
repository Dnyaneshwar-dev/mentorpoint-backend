import express from "express";
import { addOpportunities } from "../controllers/opportunities/addOpportunities.js";
import { getOpportunities } from "../controllers/opportunities/getOpportunities.js";

const OpportunitiesRouter = express.Router();

OpportunitiesRouter.post("/get", getOpportunities);
OpportunitiesRouter.post("/add", addOpportunities);

export { OpportunitiesRouter };
