import { IDataUserDTO } from "dtos/IDataUserDTO";
import { IUser } from "models/dtos/IUser";
import { User } from "models/User";
import IUserRepository from "repositories/IUserRepository";
import { getRepository, Repository } from "typeorm";

class UserRepository implements IUserRepository {
  private userRepository: Repository<User>

  constructor() {
    this.userRepository = getRepository<User>(User);
  }

  async create(
    data: IDataUserDTO
  ): Promise<IUser> {
    const user = this.userRepository.create(data);

    await this.userRepository.save(user);

    return user;
  }

}

export { UserRepository };