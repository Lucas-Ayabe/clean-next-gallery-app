export class AlbumNotFoundError extends Error {
  constructor(id: number) {
    super(`Album with id ${id} not founded`);
  }
}
