import servicesSchema from "../../models/services.js";
import {
  sendFailResponse,
  sendSuccessResponse,
} from "../../utils/responses.js";

export const updateServices = async (req, res) => {
  try {
    let serviceToAdd = req?.body;
    let _id = serviceToAdd?._id;

    let data = await servicesSchema.findByIdAndUpdate(_id, serviceToAdd, {
      new: true,
      runValidators: true,
    });

    sendSuccessResponse({
      res,
      data,
    });
  } catch (err) {
    sendFailResponse({
      res,
      err: err,
      statusCode: 500,
    });
  }
};
