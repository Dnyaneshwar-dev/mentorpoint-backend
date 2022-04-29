import mongoose from "mongoose";
import { generateHashedPassword } from "../../utils/passwords.js";

import usersSchema from "../../models/users.js";
import {
  sendFailResponse,
  sendSuccessResponse,
} from "../../utils/responses.js";

export const addUser = async (req, res) => {
  try {
    var { email, password, name } = req?.body;
    password = generateHashedPassword(password);
    let data = await usersSchema.create({ email, name, password });
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
