import { Entity, Photo } from "../../entities";
import { PhotoRepository } from "../../use-cases/ports";

export class RemotePhotoRepository implements PhotoRepository {
  endpoint(endpoint: string) {
    return "https://jsonplaceholder.typicode.com".concat(endpoint);
  }

  async findAllByAlbumId(id: number): Promise<Entity<Photo>[]> {
    const endpoint = this.endpoint(`/albums/${id}/photos`);
    const response = await fetch(endpoint);
    const remotePhotos: any[] = await response.json();

    return remotePhotos.map((remotePhoto) => ({
      ...Photo.from(remotePhoto.title, remotePhoto.url, remotePhoto.thumbnail),
      id,
    }));
  }
}
