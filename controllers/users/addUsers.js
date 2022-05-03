import mongoose from "mongoose";
import { generateHashedPassword } from "../../utils/passwords.js";
import jwt from "jsonwebtoken";
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
    const token = jwt.sign({ user: data }, process.env.CRYPTO_JS_KEY);
    sendSuccessResponse({
      res,
      data: token,
    });
  } catch (err) {
    console.log(err);
    sendFailResponse({
      res,
      err: "User Already Exists",
      statusCode: 500,
    });
  }
};
