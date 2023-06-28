import { PrismaClient } from "@prisma/client";
import {
  ExecuteInputID,
  ICategoryRepository,
} from "../../application/repository/category-repository";
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
      (item : any) => new Category(item.name, item.description, item.id)
    );
  }
  async delete(inputID: ExecuteInputID): Promise<void> {
    await this.prisma.category.delete({
      where: {
        id: inputID.id,
      },
    });
  }
  async update(category: Category): Promise<void> {
    await this.prisma.category.update({
      where: {
        id: category.getId,
      },
      data: {
        name: category.getName,
        description: category.getDescription,
      },
    });
  }
  async getByID(inputID: ExecuteInputID): Promise<Category | null> {
    const response = await this.prisma.category.findUnique({
      where: {
        id: inputID.id,
      },
    });
    if (response == null) return null;
    return new Category(response.name, response.description, response.id);
  }
}
