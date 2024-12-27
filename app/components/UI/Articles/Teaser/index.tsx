import Link from "next/link";
import React from "react";
import Card from "@/app/components/UI/Card";

export default function Teaser({ article }: { article: any }) {
  const { id, titel, labelType, afbeelding, pathname } = article;

  return (
    <div className="w-full lg:w-[622px] shrink">
      <Link href={`${pathname}/artikel/${id}`}>
        <Card
          id={id}
          titel={titel}
          labelType={labelType}
          image={afbeelding}
          cardType="teaser"
        />
      </Link>
    </div>
  );
}
