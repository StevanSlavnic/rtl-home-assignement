interface Article {
  id: number;
  title: string;
  content: string;
}

export interface ArticlesState {
  articles: Article[];
  loading: boolean;
  error: string | null;
}

export const initialState: ArticlesState = {
  articles: [],
  loading: false,
  error: null,
};

export type ArticlesAction =
  | { type: "FETCH_ARTICLES_REQUEST" }
  | { type: "FETCH_ARTICLES_SUCCESS"; payload: Article[] }
  | { type: "FETCH_ARTICLES_FAILURE"; payload: string };

const articlesReducer = (
  state: ArticlesState = initialState,
  action: ArticlesAction
): ArticlesState => {
  switch (action.type) {
    case "FETCH_ARTICLES_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_ARTICLES_SUCCESS":
      return {
        ...state,
        loading: false,
        articles: action.payload,
      };
    case "FETCH_ARTICLES_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default articlesReducer;
