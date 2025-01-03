import { SPORT_ARTICLE_URI } from "../constants";

export const generateArticleUrl = (id: number, titel: string) => {
  return `${SPORT_ARTICLE_URI}/${id}/${titel.replace(/ /g, "-").toLowerCase()}`;
};
