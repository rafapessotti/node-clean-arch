import { ICategoryRepository } from "../../application/repository/category-repository";
import { Category } from "../../domain/entities/category";

export class CategoryInMemory implements ICategoryRepository {
  private data: Category[] = [];
  create(category: Category): Category {
    // const categoryId = new Category(
    //   category.getName,
    //   category.getDescription,
    //   1
    // );
    this.data.push(category);
    return category;
  }
  getall(): Category[] {
    return this.data;
  }
}
