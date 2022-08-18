import { Request, Response } from "express";
import validator from "../../services/validator";
import UserService from "../users/dao";
const authController = {
  register: async function (req: Request, res: Response) {
    try {
      await UserService.createUser(req.body);
      return res.status(201).send("el usuario ha sido registrado");
    } catch (error) {
      res.status(404).send(validator(error));
    }
  },
};

export default authController;
