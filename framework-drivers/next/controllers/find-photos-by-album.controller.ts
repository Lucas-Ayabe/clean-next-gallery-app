import { GetServerSideProps } from "next";
import { PhotoController } from "../../../interface-adapters";

export const findPhotosByAlbumController = (
  controller: PhotoController
): GetServerSideProps => {
  return async (ctx) => {
    return {
      props: {
        albums: await controller.findAllByAlbum({
          payload: { id: +(ctx.params?.id ?? 0) },
        }),
      },
    };
  };
};
