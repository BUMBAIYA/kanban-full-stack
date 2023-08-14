import { config } from "dotenv";
config();
import express from "express";
import cors from "cors";
import { createServer } from "http";
import { userRouter } from "@/routes/userRoute";

const PORT = process.env.SERVER_PORT;
if (!PORT) {
  throw new Error(`Unable to load PORT variable from .env`);
}

const expressApp = express();
expressApp.use(
  cors({
    origin: process.env.CORS_ORIGIN ?? "*",
  })
);
expressApp.use(express.json());
const httpServer = createServer(expressApp);

expressApp.get("/", (_, res) => {
  res.status(200).send("Hi from Kanban socket server");
});

expressApp.use("/api/user", userRouter);

httpServer.listen(PORT, () => {
  console.log(`⚡[Server]: Server running on http://localhost:${PORT}`);
});
