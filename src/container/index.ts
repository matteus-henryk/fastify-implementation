import { UserRepository } from "repositories/implementations/UserRepository";
import IUserRepository from "repositories/IUserRepository";
import { container } from "tsyringe";

container.registerSingleton<IUserRepository>(
  "UserRepository",
  UserRepository
);