import "./connections/config.js";
import "./events/newevent.js";

import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import connectToMongoDb from "./connections/mongodb.js";
import { UsersRouter } from "./routers/users.js";
import { ServicesRouter } from "./routers/services.js";
import { OpportunitiesRouter } from "./routers/opportunities.js";
import { SessionRouter } from "./routers/sessions.js";
import { SlotsRouter } from "./routers/slots.js";

import parseEvent from "./events/eventparser.js";
import createEvent from "./events/newevent.js";

connectToMongoDb();
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.use(cors());

app.use("/api/users", UsersRouter);
app.use("/api/services", ServicesRouter);
app.use("/api/opportunities", OpportunitiesRouter);
app.use("/api/sessions", SessionRouter);
app.use("/api/slots", SlotsRouter);

app.get("/", (req, res) => {
  res.send("Mentorpoint");
});

const PORT = process.env.PORT || 5000;
app.listen(5000, () => {
  console.log(`Mentorpoint Server is running on port ${PORT}.`);
});

// createEvent(
//   parseEvent({
//     summary: "Jevayla Ya",
//   })
// ).then((res) => console.log(res));
