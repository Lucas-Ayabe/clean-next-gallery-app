import { EmptyTextError } from "./errors";
import { Photo } from "./photo";

export class Album {
  private constructor(
    public readonly title: string,
    public readonly photos: Photo[]
  ) {}

  static from(title: string, photos: Photo[]) {
    if (title === "") throw new EmptyTextError("title");
    return new Album(title, photos);
  }
}
