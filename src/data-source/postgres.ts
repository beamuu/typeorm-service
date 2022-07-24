import { DataSource } from "typeorm";
import { UserEntity } from "../entities/user";

export const postgresDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST_NAME || "local",
  port: 5432,
  username: "admin",
  password: "admin",
  synchronize: true,
  logging: true,
  entities: [UserEntity],
  subscribers: [],
  migrations: [],
});
