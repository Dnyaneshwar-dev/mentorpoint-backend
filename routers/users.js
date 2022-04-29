import express from "express";
import { addUser } from "../controllers/users/addUsers.js";
import { getUsers } from "../controllers/users/getUsers.js";
import { signIn } from "../controllers/users/signIn.js";
import { updateUsers } from "../controllers/users/updateUsers.js";

const UsersRouter = express.Router();

UsersRouter.get("/", getUsers);
UsersRouter.put("/", updateUsers);
UsersRouter.post("/signup", addUser);
UsersRouter.post("/signin", signIn);

export { UsersRouter };
