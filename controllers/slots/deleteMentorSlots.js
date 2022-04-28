import {
  sendSuccessResponse,
  sendFailResponse,
} from "../../utils/responses.js";
import slotsSchema from "../../models/slots.js";

export const deleteMentorSlots = async (req, res) => {
  try {
    const { slotId, _id } = req.body;
    const data = await slotsSchema.findByIdAndUpdate(_id, {
      $pull: { mentor_slots: { _id: slotId } },
    });
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
