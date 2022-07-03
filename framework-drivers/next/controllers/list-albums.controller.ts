import { GetServerSideProps } from "next";
import { AlbumController } from "../../../interface-adapters";

export const listAlbumsController = (
  albumController: AlbumController
): GetServerSideProps => {
  return async () => {
    return {
      props: {
        albums: await albumController.findAll({ payload: {} }),
      },
    };
  };
};
