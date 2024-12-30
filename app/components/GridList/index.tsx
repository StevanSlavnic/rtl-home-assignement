import Link from "next/link";
import Card from "@/app/components/Card";
import { SPORT_ARTICLE_URI } from "@/app/constants";
import { IArticle } from "@/app/types";

export default function GridList({ articles }: { articles: IArticle[] }) {
  return (
    <>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2 gap-5">
        {articles.map(({ id, titel, afbeelding, labelType }: IArticle) => {
          return (
            <Link key={id} href={`${SPORT_ARTICLE_URI}/${id}`}>
              <Card
                id={id}
                titel={titel}
                image={afbeelding}
                labelType={labelType}
                cardType="base"
              />
            </Link>
          );
        })}
      </div>
    </>
  );
}
