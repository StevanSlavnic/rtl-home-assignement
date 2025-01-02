import Image from "next/image";
import { ArticleType } from "@/app/types";

export default function Card({
  id,
  titel,
  labelType,
  afbeelding,
  cardType = "base",
}: {
  id: number | string;
  titel: string;
  labelType: string;
  afbeelding: string;
  cardType: ArticleType;
}) {
  return (
    <article
      data-testid={`card-${cardType}-${id}`}
      key={id}
      className={`card ${cardType}`}
    >
      <div className="brightness-50 scale-100">
        <picture>
          <div className={`card-image ${cardType}`}>
            <Image
              data-testid={`card-image-${id}`}
              className="object-cover object-top hover:scale-[1.07] transition ease-in-out delay-150 duration-300"
              src={afbeelding}
              alt={`${titel}` || "Image"}
              fill
              priority
              sizes="(min-width: 768px) 100vw, (max-width: 767px) 53vw, 100vw"
            />
          </div>
        </picture>
      </div>
      <div className={`card-headline ${cardType}`}>
        <div className={`card-headline__border bg-sky-500 ${cardType}`}></div>
        <div>
          <div className={`card-headline__label ${cardType}`}>{labelType}</div>
          <h2 className={`card-headline__title line-clamp-2 ${cardType}`}>
            {titel}
          </h2>
        </div>
      </div>
    </article>
  );
}
