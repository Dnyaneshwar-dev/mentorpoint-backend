import {
  sendSuccessResponse,
  sendFailResponse,
} from "../../utils/responses.js";
import slotsSchema from "../../models/slots.js";

export const updateSlots = async (req, res) => {
  try {
    const slotsToUpdate = req?.body;
    let mentor_id = slotsToUpdate?.mentor_id;
    const { mentor_slots } = slotsToUpdate;
    let data = await slotsSchema.findOneAndUpdate(
      { mentor_id },
      { $push: { mentor_slots } },
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
    console.log(err);
    sendFailResponse({
      res,
      message: err?.message,
    });
  }
};
