import {
  sendSuccessResponse,
  sendFailResponse,
} from "../../utils/responses.js";
import sessionsSchema from "../../models/sessions.js";

export const getChats = async (req, res) => {
  try {
    const query = req?.query;
    let data = await sessionsSchema.find(query);

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
