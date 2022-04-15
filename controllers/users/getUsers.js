import usersSchema from "../../models/users.js";
import {
  sendFailResponse,
  sendSuccessResponse,
} from "../../utils/responses.js";

export const getUsers = async (req, res) => {
  try {
    const query = req?.body || {};
    const data = await usersSchema.find({ ...query }, { password: 0 });
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
