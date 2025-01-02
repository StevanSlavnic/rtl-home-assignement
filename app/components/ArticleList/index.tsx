import Link from "next/link";
import { Fragment } from "react";

import { IArticle, IArticleListProps } from "@/app/types";
import { generateArticleUrl } from "@/app/utils/generateArticleUrl";

import Card from "../Card";

export default function ArticleList({
  testid,
  styles,
  type,
  articles,
}: IArticleListProps) {
  return (
    <section data-testid={testid} className={styles}>
      {articles.map((article: IArticle) => (
        <Fragment key={article.id}>
          <Link
            data-testid={`article-link-${article.id}`}
            role="link"
            href={generateArticleUrl(article.id, article.titel)}
          >
            <Card {...article} cardType={type} />
          </Link>
        </Fragment>
      ))}
    </section>
  );
}
