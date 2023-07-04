"use client";

import { type Content } from "@/utils/types";
import Image from "next/image";
import { BarChart2 } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function ContentList({ content }: { content: Content[] }) {
  return (
    <div className="grid grid-cols-2 justify-items-center gap-x-2 gap-y-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-3 lg:gap-y-3 2xl:grid-cols-5">
      {content.map((co) => (
        <Card key={co.id} content={co} />
      ))}
    </div>
  );
}

function Card({ content }: { content: Content }) {
  const {
    title,
    poster_path,
    vote_average,
    release_date,
    name,
    first_air_date,
  } = content;
  const pathname = usePathname();
  let contentLink = `${pathname}/${content.id}`;
  return (
    <Link href={contentLink} className="max-w-[18em] h-max">
      <div className="p-4 border-2 border-gray-100 rounded-lg shadow-md ">
        {poster_path && (
          <Image
            width={250}
            height={500}
            className=""
            alt={`Poster of ${title}`}
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          />
        )}
        <div className="w-full pt-2">
          <h1 className="text-sm font-semibold title-font text-primary_light ">
            {name ? name : title}
          </h1>

          <div className="flex flex-col mt-1 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2 text-xs text-gray-400 ">
              <BarChart2 className="w-5 h-4" />
              {vote_average} / 10
            </div>
            <p className="text-xs text-gray-400">
              {first_air_date ? first_air_date : release_date}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ContentList;
