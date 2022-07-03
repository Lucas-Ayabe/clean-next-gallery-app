import { Album } from "../../entities/album";
import { IEither } from "../../shared";
import { UseCase } from "../use-case";
import { AlbumNotFoundError } from "./errors";

export interface FetchAlbumRequest {
  id: number;
}
export interface FetchAlbum
  extends UseCase<FetchAlbumRequest, IEither<AlbumNotFoundError, Album>> {}
