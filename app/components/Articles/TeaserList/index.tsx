import Link from "next/link";
import React from "react";
import Card from "@/app/components/Card";
import { IArticle } from "@/app/types";
import { generateArticleUrl } from "@/app/utils/generateArticleUrl";

export default function TeaserList({ articles }: { articles: IArticle[] }) {
  return (
    <div
      data-testid="teaser-list"
      className="sm:flex sm:flex-col sm:ml-0 md:grid md:grid md:grid-cols-[repeat(2,_1fr)] md:m-0 lg:flex lg:flex-col lg:flex-wrap lg:ml-5 lg:grow"
    >
      {articles.map(({ id, labelType, titel, afbeelding }: IArticle) => {
        return (
          <div key={id} className="mb-5">
            <Link
              role={`link-${id}`}
              key={id}
              href={generateArticleUrl(id, titel)}
            >
              <Card
                id={id}
                titel={titel}
                image={afbeelding}
                labelType={labelType}
                cardType="teaser-list"
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
}
