import sessionsSchema from "../../models/sessions.js";
import {
  sendFailResponse,
  sendSuccessResponse,
} from "../../utils/responses.js";

export const getSessions = async (req, res) => {
  try {
    const query = req?.body || {};
    const data = await sessionsSchema.find(query).populate("service_id");
    sendSuccessResponse({
      res,
      data,
    });
  } catch (err) {
    console.log(err);
    sendFailResponse({
      res,
      message: err?.message,
    });
  }
};
