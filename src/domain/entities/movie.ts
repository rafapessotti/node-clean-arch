export class Movie {
  constructor(
    private name: string,
    private idCategory: number,
    private age: number,
    private synopsis: string,
    private id?: number
  ) {}

  get getName(): string {
    return this.name;
  }
  get getIdCategory(): number {
    return this.idCategory;
  }
  get getAge(): number {
    return this.age;
  }
  get getSynopsis(): string {
    return this.synopsis;
  }
  get getId(): number | undefined {
    return this.id;
  }
}
