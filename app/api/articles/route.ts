import { NextResponse } from "next/server";
import { articles } from "../../../data/articles"; // Simulated data
import { INITIAL_PAGE, PAGE_LIMIT } from "@/constants";

export async function GET(request: Request): Promise<Response> {
  const { searchParams } = new URL(request.url);
  const currentPage = parseInt(searchParams.get("page") || "1"); // Default to page 1
  const limit = parseInt(searchParams.get("limit") || `${PAGE_LIMIT}`); // Default to 12 items per page

  const startIndex = (currentPage - INITIAL_PAGE) * limit;
  const endIndex = currentPage * limit;

  const paginatedArticles = articles
    .slice(startIndex, endIndex)
    .map((article) => {
      return {
        id: article.id,
        titel: article.titel,
        afbeelding: article.afbeelding.path,
        labelType: article.labelType,
      };
    }); // Omitted other properties for brevity

  return NextResponse.json({
    data: paginatedArticles,
    total: articles.length,
    currentPage,
    totalPages: Math.ceil(articles.length / limit),
  });
}
