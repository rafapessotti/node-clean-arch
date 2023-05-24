import { Category } from "../../../domain/entities/category";
import {
  ExecuteInput,
  ExecuteOutput,
  ICreateCategory,
} from "../../../domain/use-cases/category/create-category";
import { ICategoryRepository } from "../../repository/category-repository";

export class CreateCategoryUseCase implements ICreateCategory {
  constructor(private readonly categoryRepository: ICategoryRepository) {}

  execute(input: ExecuteInput): ExecuteOutput {
    const entitiCategory = new Category(input.name, input.description);
    const response = this.categoryRepository.create(entitiCategory);
    return {
      name: response.getName,
      description: response.getDescription,
      id: response.getId,
    };
  }
}
