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

app.use("/api/users", UsersRouter);
app.use("/api/sessions", SessionRouter);
app.use("/api/opportunities", OpportunitiesRouter);
app.get("/", (req, res) => {
  res.send("Mentorpoint");
});
const PORT = process.env.PORT || 5000;
app.listen(5000, () => {
  console.log(`Mentorpoint Server is running on port ${PORT}.`);
});
