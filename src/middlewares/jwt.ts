import { NextFunction, Request, Response } from "express";
import JwtService from "../services/jwt/index";
class Middleware {
  async tokenVerify(req: Request, res: Response, next: NextFunction) {
    try {
        let token: string = req.headers["token"] as string;
        console.log(req.headers);
        
        if (!token || token.length == 0) {
          res.status(400).send("token no existe");
          return;
        }
        await JwtService.verifyJwt(token);

        next();
    } catch (error) {
        res.status(400).send("token inválido");
        
    }

  }
}

export default Middleware;
