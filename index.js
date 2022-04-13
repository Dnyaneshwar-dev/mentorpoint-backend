import "./connections/config.js";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import connectToMongoDb from "./connections/mongodb.js";
import { UsersRouter } from "./routers/users.js";
import { SessionRouter } from "./routers/sessions.js";
import { OpportunitiesRouter } from "./routers/opportunities.js";

connectToMongoDb();
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.use(cors());

app.use("/api/user", UsersRouter);
app.use("/api/session", SessionRouter);
app.use("/api/opportunity", OpportunitiesRouter);

const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
  console.log(`Mentorpoint Server is running on port ${PORT}.`);
});
