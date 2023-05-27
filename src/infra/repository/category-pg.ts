import { PrismaClient } from "@prisma/client";
import { ICategoryRepository } from "../../application/repository/category-repository";
import { Category } from "../../domain/entities/category";

export class CategoryPG implements ICategoryRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create(category: Category): Promise<Category> {
    const item = await this.prisma.category.create({
      data: {
        name: category.getName,
        description: category.getDescription,
      },
    });

    return new Category(item.name, item.description, item.id);
  }
  async getall(): Promise<Category[]> {
    const response = await this.prisma.category.findMany();
    return response.map(
      (item) => new Category(item.name, item.description, item.id)
    );
  }
}
