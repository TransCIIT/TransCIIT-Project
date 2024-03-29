import { Card } from "flowbite-react";
import Link from "next/link";
import React from "react";

import type { Blogs } from "../../interfaces/blog";

type Props = {
  items: Blogs[];
};

const Article = ({ items }: Props) => (
  <div className="grid gap-7 lg:grid-cols-3">
    {items.map((item) => (
      <div key={item.bg_id}>
        <Card>
          <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {item.bg_title}
          </h5>
          <p className="line-clamp-3 text-base font-normal text-gray-700 dark:text-gray-400">
            {item.bg_description}
          </p>
          {item.bg_link && (
            <Link
              href={item.bg_link}
              className="inline-flex items-center justify-center rounded-lg bg-primary-700 px-3  py-2 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                className="-mr-1 ml-2 size-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          )}
        </Card>
      </div>
    ))}
  </div>
);

export default Article;
