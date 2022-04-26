import mongoose from "mongoose";
import {
  sendSuccessResponse,
  sendFailResponse,
} from "../../utils/responses.js";
import sessionsSchema from "../../models/sessions.js";
import slotsSchema from "../../models/slots.js";

export const addSessions = async (req, res) => {
  try {
    const sessionToAdd = req?.body;
    const { mentor_id, slot } = sessionToAdd;

    const slotResponse = await slotsSchema.findOneAndUpdate(
      { mentor_id },
      {
        $push: { user_slots: slot },
      }
    );

    delete sessionToAdd["mentor_id"];
    delete sessionToAdd["slot"];
    const sessionResponse = await sessionsSchema.create(sessionToAdd);
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
