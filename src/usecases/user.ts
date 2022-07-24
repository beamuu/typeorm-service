import { UserType } from "../entities";
import { userRepository } from "../repositories";

export class UserUsecase {
  createUser = async (u: UserType) => {
    const user = userRepository.create(u);
    await userRepository.save(user);
  };

  findAllUser = async () => {
    return await userRepository.find();
  };

  findOneUser = async (u: UserType) => {
    return await userRepository.findOneBy(u);
  };

  findOneAndUpdate = async (u: UserType, updatedField: UserType) => {
    // const user = await this.findOneUser(u);    << !!!
    // Recommended not to use another usecases.
    // For more technical reasons, please see https://stackoverflow.com/questions/43803666/clean-architecture-combining-interactors
    const user = await userRepository.findOneBy(u);
    if (user === null) {
      return;
    }
    user.update(updatedField);
    return await userRepository.save(user);
  };
  delete = async (u: UserType) => {
    const user = await userRepository.findOneBy(u);
    if (user === null) {
      return;
    }
    return await userRepository.remove(user);
  };
}
export const userUsecase = new UserUsecase();
