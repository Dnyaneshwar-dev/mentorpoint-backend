import usersSchema from "../../models/users.js";
import {
  sendFailResponse,
  sendSuccessResponse,
} from "../../utils/responses.js";

export const getUsers = async (req, res) => {
  try {
    let query = req.body?.query || {};

    if (!query?.is_deleted) {
      query = { ...query, is_deleted: false };
    }

    let users = await usersSchema.find({ ...query }, { password: 0 });

    console.log(users, "Name");

    sendSuccessResponse({
      res,
      data: users,
    });
  } catch (err) {
    sendFailResponse({
      res,
      message: err?.message,
    });
  }
};
