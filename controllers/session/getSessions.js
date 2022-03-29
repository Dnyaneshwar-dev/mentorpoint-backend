import sessionsSchema from "../../models/sessions.js";
import {
  sendFailResponse,
  sendSuccessResponse,
} from "../../utils/responses.js";

export const getSessions = async (req, res) => {
  try {
    let query = req?.query?.body || {};

    if (!query?.is_deleted) {
      query = { ...query, is_deleted: false };
    }

    let sessions = await sessionsSchema.find(query);

    sendSuccessResponse({
      res,
      data: sessions,
    });
  } catch (err) {
    sendFailResponse({
      res,
      message: err?.message,
    });
  }
};
