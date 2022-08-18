import { createUserMapper, findUserByEmailMapper } from "./dto";
import { User } from "./model";

class UserService {
  createUser(data: any): Promise<User> {
    return User.create(createUserMapper(data));
  }
  getUserByEmail(email: any) {
    return User.findOne({
      where: {
        email: findUserByEmailMapper(email),
      }
    });
  }
}

export default new UserService();
