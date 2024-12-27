import Link from "next/link";
import React from "react";
import Card from "@/app/components/UI/Card";

export default function TeaserList({ articles }: { articles: any }) {
  return (
    <div className="flex flex-col md:flex-wrap sm:flex-wrap lg:ml-4 lg:grow gap-4">
      {articles.map(({ id, labelType, titel, afbeelding }: any) => {
        return (
          <div key={id} className="lg:w-full w-1/2">
            <Link key={id} href={`sport/artikel/${id}`}>
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
