export class Category {
  private id?: number;
  private name: string;
  private description: string;

  constructor(name: string, description: string, id?: number) {
    this.name = name;
    this.description = description;
    this.id = id;
  }

  get getName(): string {
    return this.name;
  }
  get getDescription(): string {
    return this.description;
  }
  get getId(): number | undefined {
    return this.id;
  }
}
