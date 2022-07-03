import { ListAlbums } from "../../use-cases";
import { Controller } from "../controller";
import { Presenter } from "../presenter";

export class AlbumController {
  constructor(private presenter: Presenter, private listAlbums: ListAlbums) {}

  public findAll: Controller<{}> = async () => {
    return this.presenter(await this.listAlbums.execute());
  };
}
