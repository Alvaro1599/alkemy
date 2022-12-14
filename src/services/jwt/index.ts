import { sign, SignOptions, verify } from "jsonwebtoken";
import { loginReponseJwtI } from "../../api/Auth/mappers";
import { GlobalConfig } from "../../config";
import { configOptions } from "./config";
class JwtService {
  private secret: string = GlobalConfig.app.JWT_SECRET;
  private config: SignOptions = configOptions;

  async createJwt(data: loginReponseJwtI):Promise<string> {
    return sign({data}, this.secret, this.config);
  }

  async verifyJwt(token: string) {
    return verify(token, this.secret);
  }
}

export default new JwtService;
