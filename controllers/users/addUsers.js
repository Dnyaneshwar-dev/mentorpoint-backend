import mongoose from "mongoose";
import { generateHashedPassword } from "../../utils/passwords.js";
import usersSchema from "../../models/users.js";
import {
  sendFailResponse,
  sendSuccessResponse,
} from "../../utils/responses.js";

export const addUser = async (req, res) => {
  try {
    const userToAdd = req?.body?.user;
    let _id = userToAdd?._id;
    let dataToSet = {};
    console.log(userToAdd, _id);

    if (!_id) {
      _id = mongoose.Types.ObjectId();
      const password = generateHashedPassword();
      dataToSet = { ...userToAdd, password };
    } else {
      dataToSet = userToAdd;
    }

    let mongoRes = await usersSchema
      .findOneAndUpdate({ _id }, dataToSet, {
        upsert: true,
        new: true,
        setDefaultsOnInsert: true,
        runValidators: true,
      })
      .select("-password");

    sendSuccessResponse({
      res,
      data: mongoRes,
    });
  } catch (err) {
    console.log(err);
    sendFailResponse({
      res,
      err: err,
      statusCode: 500,
    });
  }
};
