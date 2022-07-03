import { Entity, Album } from "../../entities";

export interface AlbumRepository {
  findAll(): Promise<Entity<Album>[]>;
  findById(id: number): Promise<Entity<Album>>;
}
