import Link from "next/link";
import Card from "@/app/components/Card";
import { IArticle } from "@/app/types";
import { generateArticleUrl } from "@/app/utils/generateArticleUrl";

export default function GridList({ articles }: { articles: IArticle[] }) {
  return (
    <>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2 gap-5">
        {articles.map(({ id, titel, afbeelding, labelType }: IArticle) => {
          return (
            <Link key={id} href={generateArticleUrl(id, titel)}>
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
