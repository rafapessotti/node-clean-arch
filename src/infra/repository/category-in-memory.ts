import {
  ExecuteInputID,
  ICategoryRepository,
} from "../../application/repository/category-repository";
import { Category } from "../../domain/entities/category";

export class CategoryInMemory implements ICategoryRepository {
  delete(inputID: ExecuteInputID): Promise<void> {
    throw new Error("Method not implemented.");
  }
  update(category: Category): Promise<void> {
    throw new Error("Method not implemented.");
  }
  getByID(inputID: ExecuteInputID): Promise<Category> {
    throw new Error("Method not implemented.");
  }
  private data: Category[] = [];
  async create(category: Category): Promise<Category> {
    // const categoryId = new Category(
    //   category.getName,
    //   category.getDescription,
    //   1
    // );
    this.data.push(category);
    return category;
  }
  async getall(): Promise<Category[]> {
    return this.data;
  }
}
