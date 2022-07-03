export class EmptyTextError extends Error {
  constructor(prop: string = "") {
    super(`Property '${prop}' cannot be empty.`);
  }
}
