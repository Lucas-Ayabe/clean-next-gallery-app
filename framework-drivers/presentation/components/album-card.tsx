import Link from "next/link";

export interface AlbumProps {
  id: number;
  title: string;
}

export const AlbumCard = ({ id, title }: AlbumProps) => {
  return (
    <article>
      <h1>{title}</h1>
      <Link href={`/albums/${id}/photos`} passHref>
        <a>Ver fotos</a>
      </Link>
    </article>
  );
};
