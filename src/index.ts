import "reflect-metadata";
import express from "express";
import { AppDataSource } from "../ormconfig";
import { User } from "./entity/User";

const app = express();
app.use(express.json());

app.get("/users", async (_req, res) => {
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find();
  res.json(users);
});

app.post("/users", async (req, res) => {
  const userRepository = AppDataSource.getRepository(User);
  const user = userRepository.create(req.body);
  await userRepository.save(user);
  res.json(user);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
