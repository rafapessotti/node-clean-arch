import { CreateCategoryUseCase } from "../../application/use-cases/category/create-category";
import { ICreateCategory } from "../../domain/use-cases/category/create-category";
import { CategoryInMemory } from "../repository/category-in-memory";

export function CreateCategoryFactory(): ICreateCategory {
  const categoryInMemory = new CategoryInMemory();
  const useCase = new CreateCategoryUseCase(categoryInMemory);
  return useCase;
}
