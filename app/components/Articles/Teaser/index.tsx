import Link from "next/link";
import Card from "@/app/components/Card";
import { IArticle } from "@/app/types";
import { SPORT_ARTICLE_URI } from "@/app/constants";

export default function Teaser({ article }: { article: IArticle }) {
  const { id, titel, labelType, afbeelding } = article;

  return (
    <div className="w-full shrink-0 mb-5 sm:mb-5 lg:w-[643px]">
      <Link href={`${SPORT_ARTICLE_URI}/${id}`}>
        <Card
          id={id}
          titel={titel}
          labelType={labelType}
          image={afbeelding}
          cardType="teaser"
        />
      </Link>
    </div>
  );
}
