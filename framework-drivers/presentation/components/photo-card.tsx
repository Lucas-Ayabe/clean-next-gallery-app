export interface PhotoCardProps {
  url: string;
  title: string;
}

export const PhotoCard = ({ title, url }: PhotoCardProps) => {
  return (
    <figure>
      <article>
        <img src={url} alt={title} />
        <figcaption>{title}</figcaption>
      </article>
    </figure>
  );
};
