import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";
import { route } from "./presentation/routes/category-route";

const app: Express = express();
app.use(bodyParser.json());
app.use("/", route);
const port = 3000;

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
