import { Router, Request, Response } from "express";
import { CreateCategory } from "../controllers/create-category";
import { GetAllCategory } from "../controllers/get-all-category";
import { DeleteCategory } from "../controllers/delete-category";
import { UpdateCategory } from "../controllers/update-category";

export const route = Router();

route.post("/", async (req: Request, res: Response) => {
  const createCategory = new CreateCategory();
  const response = await createCategory.execute(req.body);
  // res.json(JSON.stringify(response));
  res.json(response);
});

route.delete("/:id", async (req: Request, res: Response) => {
  const deleteCategory = new DeleteCategory();
  // const category = {
  //   id: parseInt(req.params.id),
  // };

  await deleteCategory.execute({
    id: parseInt(req.params.id),
  });
  res.status(204).send();
});

route.put("/:id", async (req: Request, res: Response) => {
  const updateCategory = new UpdateCategory();

  await updateCategory.execute({
    id: parseInt(req.params.id),
    name: req.body.name,
    description: req.body.description,
  });
  res.status(204).send();
});

route.get("/", async (req: Request, res: Response) => {
  const getallCategory = new GetAllCategory();
  const response = await getallCategory.execute();
  res.json(response);
});
