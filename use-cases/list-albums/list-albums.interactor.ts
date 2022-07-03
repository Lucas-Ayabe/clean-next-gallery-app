import { Album } from "../../entities/album";
import { AlbumRepository } from "../ports";
import { ListAlbums } from "./list-albums";

export class ListAlbumsInteractor implements ListAlbums {
  constructor(private repository: AlbumRepository) {}

  async execute(): Promise<Album[]> {
    return this.repository.findAll();
  }
}
