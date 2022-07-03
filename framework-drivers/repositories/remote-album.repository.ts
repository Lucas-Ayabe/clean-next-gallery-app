import { Entity, Album } from "../../entities";
import { AlbumRepository } from "../../use-cases/ports";

export class RemoteAlbumRepository implements AlbumRepository {
  endpoint(endpoint: string) {
    return "https://jsonplaceholder.typicode.com".concat(endpoint);
  }

  async findAll(): Promise<Entity<Album>[]> {
    const response = await fetch(this.endpoint("/albums"));
    const remoteAlbums: any[] = await response.json();

    return remoteAlbums.map((remoteAlbum) => ({
      ...Album.from(remoteAlbum.title, []),
      id: remoteAlbum.id,
    }));
  }

  async findById(id: number): Promise<Entity<Album>> {
    const response = await fetch(this.endpoint(`/albums/${id}`));
    const remoteAlbum: any = await response.json();

    return {
      ...Album.from(remoteAlbum.title, []),
      id: remoteAlbum.id,
    };
  }
}
