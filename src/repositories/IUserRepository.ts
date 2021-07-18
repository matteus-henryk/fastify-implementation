import { IDataUserDTO } from "dtos/IDataUserDTO";
import { IUser } from "models/dtos/IUser";

export default interface IUserRepository {
  create(data: IDataUserDTO): Promise<IUser>;
}