import express from "express";
import { addUser } from "../controllers/users/addUsers.js";
import { getUsers } from "../controllers/users/getUsers.js";

const UsersRouter = express.Router();

UsersRouter.post("/get", getUsers);
UsersRouter.post("/add", addUser);

export { UsersRouter };
