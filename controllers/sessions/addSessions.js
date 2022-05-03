import mongoose from "mongoose";
import {
  sendSuccessResponse,
  sendFailResponse,
} from "../../utils/responses.js";
import sessionsSchema from "../../models/sessions.js";
import slotsSchema from "../../models/slots.js";
import createEventData from "../../events/createEventData.js";
import createEvent from "../../events/newevent.js";
import parseEvent from "../../events/eventparser.js";

export const addSessions = async (req, res) => {
  try {
    const sessionToAdd = req?.body;
    const { mentor_id, slot, date } = sessionToAdd;
    console.log(mentor_id);

    const slotResponse = await slotsSchema.findOneAndUpdate(
      { date: date, mentor_id: mentor_id },
      {
        $push: { user_slots: slot },
      }
    );

    if (slotResponse == null) {
      throw "Slot Not Found";
    }
    try {
      const event = await createEventData(sessionToAdd);
      const eventParsed = parseEvent(event);

      await createEvent(eventParsed);
    } catch (error) {}

    delete sessionToAdd["slot"];
    delete sessionToAdd["end_time"];
    const sessionResponse = await sessionsSchema.create(sessionToAdd);
    if (sessionResponse == null) {
      return "Unable to add Session";
    }

    sendSuccessResponse({
      res,
      slotResponse,
      sessionResponse,
    });
  } catch (err) {
    sendFailResponse({
      res,
      err: err,
      statusCode: 500,
    });
  }
};
