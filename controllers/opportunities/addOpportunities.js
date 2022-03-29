import mongoose from "mongoose";
import opportunitiesSchema from "../../models/opportunities.js";
import {
  sendFailResponse,
  sendSuccessResponse,
} from "../../utils/responses.js";

export const addOpportunities = async (req, res) => {
  try {
    let opportunityToAdd = req?.body?.opportunity;
    let _id = opportunityToAdd?._id;

    if (!_id) {
      _id = mongoose.Types.ObjectId();
    }

    let result = await opportunitiesSchema.findOneAndUpdate(
      { _id },
      opportunityToAdd,
      {
        upsert: true,
        new: true,
        setDefaultsOnInsert: true,
        runValidators: true,
      }
    );

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
