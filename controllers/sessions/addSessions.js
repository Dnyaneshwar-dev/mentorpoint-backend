import mongoose from "mongoose";
import {
  sendSuccessResponse,
  sendFailResponse,
} from "../../utils/responses.js";
import sessionsSchema from "../../models/sessions.js";

export const addSessions = async (req, res) => {
  try {
    const sessionToAdd = req?.body;
    const data = await sessionsSchema.create(sessionToAdd);
    sendSuccessResponse({
      res,
      data,
    });
  } catch {
    sendFailResponse({
      res,
      err: err,
      statusCode: 500,
    });
  }
};
