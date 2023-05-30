import { Category } from "../../../domain/entities/category";
import {
  ExecuteInput,
  IUpdateCategory,
} from "../../../domain/use-cases/category/update-category";
import { CategoryNotFound } from "../../errors/category-not-found";
import { ICategoryRepository } from "../../repository/category-repository";

export class UpdateCategoryUseCase implements IUpdateCategory {
  constructor(private readonly categoryRepository: ICategoryRepository) {}

  async execute(input: ExecuteInput): Promise<void> {
    const response = await this.categoryRepository.getByID({ id: input.id });
    if (response == null) throw new CategoryNotFound("ID não existe na base.");

    const entitiCategory = new Category(
      input.name || response.getName,
      input.description || response.getDescription,
      input.id
    );

    await this.categoryRepository.update(entitiCategory);
  }
}
