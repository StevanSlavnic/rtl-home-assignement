import { NextResponse } from "next/server";
import { articles } from "../../../data/articles"; // Simulated data
import { PAGE_LIMIT } from "@/app/constants";

export async function GET(request: Request): Promise<Response> {
  const { searchParams } = new URL(request.url);
  const currentPage = parseInt(searchParams.get("page") || "1"); // Default to page 1
  const limit = parseInt(searchParams.get("limit") || `${PAGE_LIMIT}`); // Default to 12 items per page

  const startIndex = (currentPage - 1) * limit;
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

  const totalPages = Math.ceil(articles.length / limit);

  return NextResponse.json({
    data: paginatedArticles,
    total: articles.length,
    currentPage,
    totalPages: totalPages,
  });
}
