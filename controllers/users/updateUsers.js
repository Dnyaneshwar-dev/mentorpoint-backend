import mongoose from "mongoose";
import { generateHashedPassword } from "../../utils/passwords.js";
import usersSchema from "../../models/users.js";
import {
  sendFailResponse,
  sendSuccessResponse,
} from "../../utils/responses.js";

export const updateUsers = async (req, res) => {
  try {
    const userToAdd = req?.body;
    const _id = userToAdd?._id;

    const data = await usersSchema
      .findByIdAndUpdate(_id, userToAdd, {
        new: true,
        runValidators: true,
      })
      .select("-password");

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
