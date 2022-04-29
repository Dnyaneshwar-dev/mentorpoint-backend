import usersSchema from "../../models/users.js";
import {
  sendFailResponse,
  sendSuccessResponse,
} from "../../utils/responses.js";
import { decryptPassword } from "../../utils/passwords.js";
const signIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await usersSchema.findOne({ email: email });

    if (!user || user == null) {
      sendFailResponse({
        res,
        message: "User Not Found",
        code: 404,
      });
      return null;
    }

    const p = user.password;

    if (password == decryptPassword(p)) {
      sendSuccessResponse({
        res,
        data: user,
      });
    } else {
      sendFailResponse({
        res,
        err: "Invalid Credentials",
      });
    }
  } catch (error) {
    sendFailResponse({
      res,
      err: "Internal Error",
    });
  }
};

export { signIn };
