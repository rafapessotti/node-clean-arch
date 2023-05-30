import { DeleteCategoryFactory } from "../../infra/factorys/delete-category";
import { InputDeleteCategory } from "../request/input-delete-category";

export class DeleteCategory {
  async execute(inputDeleteCategory: InputDeleteCategory): Promise<void> {
    const useCase = DeleteCategoryFactory();
    await useCase.execute(inputDeleteCategory);
  }
}
