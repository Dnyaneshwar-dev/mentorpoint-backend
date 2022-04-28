import {
  sendSuccessResponse,
  sendFailResponse,
} from "../../utils/responses.js";
import slotsSchema from "../../models/slots.js";

export const deleteMentorSlots = async (req, res) => {
  try {
    const { slot_id, mentor_id } = req.body;
    const data = await slotsSchema.findOneAndUpdate(
      { mentor_id },
      {
        $pull: { mentor_slots: { _id: slot_id } },
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
