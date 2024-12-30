import Link from "next/link";
import Card from "@/app/components/Card";
import { IArticle } from "@/app/types";
import { generateArticleUrl } from "@/app/utils/generateArticleUrl";

export default function Teaser({ article }: { article: IArticle }) {
  const { id, titel, labelType, afbeelding } = article;

  return (
    <div
      data-testid="teaser"
      className="w-full shrink-0 mb-5 sm:mb-5 lg:w-[643px]"
    >
      <Link href={generateArticleUrl(id, titel)}>
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
