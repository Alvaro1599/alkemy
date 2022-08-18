import { AES as SHA256, enc } from "crypto-js";
import { GlobalConfig } from "../../config";
class EncryptService {
  private secret: string = GlobalConfig.app.CRYPTO_SECRET;
  encrypt(text: string) {
    return SHA256.encrypt(text, this.secret).toString();
  }
  decrypt(text: string) {
    let bytes = SHA256.decrypt(text, this.secret);
    return bytes.toString(enc.Utf8);
  }
  isEqual(passwordDatabase: string, password: string) {
    
    return this.decrypt(passwordDatabase) == password;
  }
}

export default new EncryptService();
