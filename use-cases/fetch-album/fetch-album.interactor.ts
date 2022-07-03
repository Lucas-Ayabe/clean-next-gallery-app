import { Either, IEither } from "../../shared";
import { Album } from "../../entities";
import { AlbumRepository } from "../ports";
import { PhotoRepository } from "../ports/photo.repository";
import { AlbumNotFoundError } from "./errors";
import { FetchAlbum, FetchAlbumRequest } from "./fetch-album";

export class FetchAlbumInteractor implements FetchAlbum {
  constructor(
    private albumRepository: AlbumRepository,
    private photoRepository: PhotoRepository
  ) {}

  async execute({
    id,
  }: FetchAlbumRequest): Promise<IEither<AlbumNotFoundError, Album>> {
    try {
      const { title } = await this.albumRepository.findById(id);
      const photos = await this.photoRepository.findAllByAlbumId(id);
      return Either.Right(Album.from(title, photos));
    } catch (error) {
      return Either.Left(error as AlbumNotFoundError);
    }
  }
}
