import Link from "next/link";
import React from "react";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  basePath: string;
};

const pageHref = (basePath: string, page: number) =>
  page > 1 ? `${basePath}?page=${page}` : basePath;

const Pagination = ({ currentPage, totalPages, basePath }: PaginationProps) => {
  const hasPrev = currentPage > 1;
  const hasNext = currentPage < totalPages;
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-center gap-6 mt-16">
      {hasPrev ? (
        <Link
          href={pageHref(basePath, currentPage - 1)}
          aria-label="Previous page"
          className="text-black/60 hover:text-black transition-colors"
        >
          &#8592;
        </Link>
      ) : (
        <span aria-hidden className="text-black/30">
          &#8592;
        </span>
      )}

      <div className="flex items-center gap-3">
        {pages.map((page) =>
          page === currentPage ? (
            <span
              key={page}
              className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-sm"
            >
              {page}
            </span>
          ) : (
            <Link
              key={page}
              href={pageHref(basePath, page)}
              className="w-8 h-8 rounded-full flex items-center justify-center text-sm text-black/60 hover:text-black transition-colors"
            >
              {page}
            </Link>
          ),
        )}
      </div>

      {hasNext ? (
        <Link
          href={pageHref(basePath, currentPage + 1)}
          aria-label="Next page"
          className="text-black/60 hover:text-black transition-colors"
        >
          &#8594;
        </Link>
      ) : (
        <span aria-hidden className="text-black/30">
          &#8594;
        </span>
      )}
    </div>
  );
};

export default Pagination;
