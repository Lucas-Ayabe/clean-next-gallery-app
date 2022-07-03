import { FetchAlbum } from "../../use-cases";
import { Controller } from "../controller";
import { Presenter } from "../presenter";

export class PhotoController {
  constructor(private presenter: Presenter, private fetchAlbum: FetchAlbum) {}

  public findAllByAlbum: Controller<{ id: number }> = async (input) => {
    const albumOrError = await this.fetchAlbum.execute(input.payload);

    return this.presenter(
      albumOrError.matchWith({
        left: (x) => x,
        right: (x) => x as any,
      })
    );
  };
}
