import * as dotenv from "dotenv";
dotenv.config();
import "express-async-errors";

import express, { Express } from "express";
import bodyParser from "body-parser";
import { route } from "./presentation/routes/category-route";
import { errorHandler } from "./infra/middlewares/error-handler";

const app: Express = express();
app.use(bodyParser.json());
app.use(errorHandler);

app.use("/", route);
const port = 3000;

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
