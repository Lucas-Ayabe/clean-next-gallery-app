import { Album } from "../../entities/album";
import { ResponseOnlyUseCase } from "../use-case";

export interface ListAlbums extends ResponseOnlyUseCase<Album[]> {}
