import express from "express";
import { handler } from "./handler";

const userRouter = express.Router();
userRouter.get("/", handler.findAllUserHandler);
userRouter.get("/:id", handler.findOneUserHandler);
userRouter.post("/", handler.createUserHandler);
userRouter.put("/:id", handler.updateUserHandler);
userRouter.delete("/:id", handler.deleteUserHandler);

export { userRouter };
