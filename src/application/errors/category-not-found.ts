export class CategoryNotFound extends Error {
  private code: number;
  constructor(message: string) {
    super(message);
    this.code = 404;
    this.name = "CategoryNotFound";
  }
}
