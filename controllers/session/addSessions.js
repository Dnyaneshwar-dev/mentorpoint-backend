import mongoose from "mongoose";
import sessionsSchema from "../../models/sessions.js";
import {
  sendFailResponse,
  sendSuccessResponse,
} from "../../utils/responses.js";

export const addSession = async (req, res) => {
  try {
    let sessionToAdd = req?.body?.session;
    let _id = sessionToAdd?._id;

    if (!_id) {
      _id = mongoose.Types.ObjectId();
    }

    let result = await sessionsSchema.findOneAndUpdate({ _id }, sessionToAdd, {
      upsert: true,
      new: true,
      setDefaultsOnInsert: true,
      runValidators: true,
    });

    sendSuccessResponse({
      res,
      data: result,
    });
  } catch (err) {
    sendFailResponse({
      res,
      err: err,
      statusCode: 500,
    });
  }
};
