import { Request, Response } from "express";
import { userUsecase } from "../usecases/user";

export class Handler {
  createUserHandler = async (req: Request, res: Response) => {
    const { id, firstName, lastName } = req.body;
    userUsecase.createUser({ id, firstName, lastName });
    return res.status(200).send();
  };

  findAllUserHandler = async (req: Request, res: Response) => {
    return res.status(200).send(await userUsecase.findAllUser());
  };

  findOneUserHandler = async (req: Request, res: Response) => {
    const { id } = req.params;
    const u = await userUsecase.findOneUser({ id });
    return res.status(200).send(u);
  };

  updateUserHandler = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { id: newId, firstName, lastName } = req.body;
    const u = await userUsecase.findOneAndUpdate({ id }, { id: newId, firstName, lastName });
    return res.status(200).send(u);
  };

  deleteUserHandler = async (req: Request, res: Response) => {
    const { id } = req.params;
    if (!id) return res.status(400).send();
    return res.status(200).send(await userUsecase.delete({ id: id }));
  };
}

export const handler = new Handler();
