import { sign, SignOptions, verify } from "jsonwebtoken";
import { GlobalConfig } from "../../config";
import { configOptions } from "./config";
class JwtService {
  private secret: string = GlobalConfig.app.JWT_SECRET;
  private config: SignOptions = configOptions;

  async createJwt(data: any) {
    sign(data, this.secret, this.config);
  }

  async verifyJwt(token: string) {
    verify(token, this.secret);
  }
}

export default new JwtService;
