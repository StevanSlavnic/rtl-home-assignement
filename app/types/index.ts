export interface IArticle {
  id: number;
  labelType: string;
  titel: string;
  afbeelding: string;
}

export type ArticleType = "base" | "teaser" | "teaser-list";

export interface IArticleListProps {
  testid: string;
  styles: string;
  type: ArticleType;
  articles: IArticle[];
}
