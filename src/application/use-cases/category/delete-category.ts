import {
  ExecuteInput,
  IDeleteCategory,
} from "../../../domain/use-cases/category/delete-category";
import { ICategoryRepository } from "../../repository/category-repository";

export class DeleteCategoryUseCase implements IDeleteCategory {
  constructor(private readonly categoryRepository: ICategoryRepository) {}

  async execute(input: ExecuteInput): Promise<void> {
    await this.categoryRepository.delete(input);
  }
}
