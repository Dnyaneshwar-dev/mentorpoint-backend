import {
  sendSuccessResponse,
  sendFailResponse,
} from "../../utils/responses.js";
import sessionsSchema from "../../models/sessions.js";

export const addChats = async (req, res) => {
  try {
    const { _id, chats } = req?.body;

    console.log(req.body);
    let data = await sessionsSchema.findByIdAndUpdate(
      _id,
      { $push: { chats: { $each: chats, $position: 0 } } },
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
