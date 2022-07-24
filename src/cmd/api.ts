import "reflect-metadata";
import express from "express";
import { userRouter } from "../delivery/router";
import { postgresDataSource } from "../data-source/postgres";

const app = express();
postgresDataSource
  .initialize()
  .then(() => console.log("[ORM] Initialized Postgres DataSource."));

const port = process.env.PORT || 8080;

app.use(express.json());
app.use("/user", userRouter); // userRouter will be registered in to '/user/...'

app.listen(port, () => console.log(`App is running on port ${port}`));
