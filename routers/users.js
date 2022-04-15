import express from "express";
import { addUser } from "../controllers/users/addUsers.js";
import { getUsers } from "../controllers/users/getUsers.js";
import { updateUsers } from "../controllers/users/updateUsers.js";

const UsersRouter = express.Router();

UsersRouter.get("/", getUsers);
UsersRouter.post("/", addUser);
UsersRouter.put("/", updateUsers);

export { UsersRouter };
