import { Request, Response } from "express";
import validator from "../../services/validator";
import UserService from "../users/dao";
import JwtService from "../../services/jwt";
import { loginResponseJwt } from "./mappers";
const authController = {
  register: async function (req: Request, res: Response) {
    try {
      await UserService.createUser(req.body);
      return res.status(201).send("el usuario ha sido registrado");
    } catch (error) {
      res.status(404).send(validator(error));
    }
  },

  login: async function (req: Request, res: Response) {
    try {
      let user = await UserService.getUserByEmail(req.body);
      if (!user) return res.status(404).send("email not found");
      let jwt = await JwtService.createJwt(loginResponseJwt(user));
      return res.status(200).header("Token", jwt).send("authenticated");
    } catch (error) {
      res.status(404).send(validator(error));
    }
  },
};

export default authController;
