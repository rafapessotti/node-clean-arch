import { CreateCategoryUseCase } from "../../application/use-cases/category/create-category";
import { ICreateCategory } from "../../domain/use-cases/category/create-category";
import { CategoryPG } from "../repository/category-pg";

export function CreateCategoryFactory(): ICreateCategory {
  const categoryCreate = new CategoryPG();
  const useCase = new CreateCategoryUseCase(categoryCreate);
  return useCase;
}
