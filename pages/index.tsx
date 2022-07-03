import { Album, Entity } from "../entities";
import { listAlbumsController } from "../framework-drivers/next/controllers";
import { RemoteAlbumRepository } from "../framework-drivers/repositories";
import { AlbumController, identityPresenter } from "../interface-adapters";
import { ListAlbumsInteractor } from "../use-cases";

import { AlbumCard } from "../framework-drivers/presentation";

export const getServerSideProps = listAlbumsController(
  new AlbumController(
    identityPresenter,
    new ListAlbumsInteractor(new RemoteAlbumRepository())
  )
);

interface AlbumsPageProps {
  albums: Entity<Album>[];
}

const AlbumsPage = ({ albums }: AlbumsPageProps) => {
  return (
    <div>
      <h1>Albums</h1>
      {albums.length > 0 &&
        albums.map((album) => <AlbumCard key={album.id} {...album} />)}
    </div>
  );
};

export default AlbumsPage;
