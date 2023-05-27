import { Category } from "../../domain/entities/category";

export interface ICategoryRepository {
  create(category: Category): Promise<Category>;
  getall(): Promise<Category[]>;
}
