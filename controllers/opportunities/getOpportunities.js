import opportunitiesSchema from "../../models/opportunities.js";
import {
  sendFailResponse,
  sendSuccessResponse,
} from "../../utils/responses.js";

export const getOpportunities = async (req, res) => {
  try {
    let query = req?.query?.body || {};

    if (!query?.is_deleted) {
      query = { ...query, is_deleted: false };
    }

    let opportunities = await opportunitiesSchema.find(query);

    sendSuccessResponse({
      res,
      data: opportunities,
    });
  } catch (err) {
    sendFailResponse({
      res,
      message: err?.message,
    });
  }
};
