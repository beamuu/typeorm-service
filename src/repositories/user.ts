import { postgresDataSource } from "../data-source/postgres";
import { UserEntity } from "../entities";

export const userRepository =  postgresDataSource.getRepository(UserEntity)