import { Category } from "../../domain/entities/category";

export interface ICategoryRepository {
  create(category: Category): Category;
  getall(): Category[];
}
