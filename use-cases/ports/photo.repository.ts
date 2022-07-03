import { Entity, Photo } from "../../entities";

export interface PhotoRepository {
  findAllByAlbumId(id: number): Promise<Entity<Photo>[]>;
}
