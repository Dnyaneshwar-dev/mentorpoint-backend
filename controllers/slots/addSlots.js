import mongoose from "mongoose";
import {
  sendFailResponse,
  sendSuccessResponse,
} from "../../utils/responses.js";
import slotsSchema from "../../models/slots.js";

export const addSlots = async (req, res) => {
  try {
    const slotsToAdd = req?.body;
    let data = await slotsSchema.create(slotsToAdd);
    sendSuccessResponse({
      res,
      data,
    });
  } catch (err) {
    sendFailResponse({
      res,
      message: err?.message,
    });
  }
};
