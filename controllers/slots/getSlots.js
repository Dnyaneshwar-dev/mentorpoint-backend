import {
  sendSuccessResponse,
  sendFailResponse,
} from "../../utils/responses.js";
import slotsSchema from "../../models/slots.js";

export const getSlots = async (req, res) => {
  try {
    const query = req?.query || {};
    console.log(query);
    const data = await slotsSchema.find(query).populate("mentor_id");
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
