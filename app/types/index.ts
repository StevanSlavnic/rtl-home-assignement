export interface IArticle {
  id: number;
  labelType: string;
  titel: string;
  afbeelding: {
    path: string;
  };
}
