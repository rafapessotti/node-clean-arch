import { Router, Request, Response } from "express";
import { CreateCategory } from "../controllers/create-category";

export const route = Router();

route.post("/", (req: Request, res: Response) => {
  const createCategory = new CreateCategory();
  const response = createCategory.execute(req.body);
  // res.json(JSON.stringify(response));
  res.json(response);
});
