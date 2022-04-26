import {
  sendSuccessResponse,
  sendFailResponse,
} from "../../utils/responses.js";
import slotsSchema from "../../models/slots.js";

export const updateSlots = async (req, res) => {
  try {
    const slotsToUpdate = req?.body;
    let _id = slotsToUpdate?._id;
    console.log(_id);
    let data = await slotsSchema.findByIdAndUpdate(
      _id,
      { $push: { mentor_slots: slotsToUpdate } },
      {
        new: true,
        runValidators: true,
      }
    );

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
