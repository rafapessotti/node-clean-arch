import { Router, Request, Response } from "express";
import { CreateCategory } from "../controllers/create-category";
import { GetAllCategory } from "../controllers/get-all-category";

export const route = Router();

route.post("/", async (req: Request, res: Response) => {
  const createCategory = new CreateCategory();
  const response = await createCategory.execute(req.body);
  // res.json(JSON.stringify(response));
  res.json(response);
});

route.get("/", async (req: Request, res: Response) => {
  const getallCategory = new GetAllCategory();
  const response = await getallCategory.execute();
  res.json(response);
});
