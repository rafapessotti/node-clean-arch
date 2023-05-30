import { UpdateCategoryFactory } from "../../infra/factorys/update-category";
import { InputUpdateCategory } from "../request/input-update-category";

export class UpdateCategory {
  async execute(inputUpdateCategory: InputUpdateCategory): Promise<void> {
    if (!inputUpdateCategory.id) {
      throw new Error("ID Obrigatório");
    }

    const useCase = UpdateCategoryFactory();
    const response = await useCase.execute(inputUpdateCategory);
    return response;
  }
}
