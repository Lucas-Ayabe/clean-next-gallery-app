import { EmptyTextError } from "./errors";

export class Photo {
  private constructor(
    public readonly title: string,
    public readonly url: string,
    public readonly thumbnail: string
  ) {}

  static from(title: string, url: string, thumbnail: string) {
    Object.entries({ title, url, thumbnail }).forEach(([name, value]) => {
      if (value === "") {
        throw new EmptyTextError(name);
      }
    });

    return new Photo(title, url, thumbnail);
  }
}
