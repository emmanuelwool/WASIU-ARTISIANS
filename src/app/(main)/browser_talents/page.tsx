"use client";
import { mostPopulartHired } from "@/mocks/AllMock";
import Link from "next/link";
import { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationLink,
  PaginationEllipsis,
} from "@/components/ui/pagination";

export default function page() {
  const itemsPerPage = 20; // Nombre d'éléments par page
  const [currentPage, setCurrentPage] = useState(1);

  // Calcul des éléments à afficher
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentJobs = mostPopulartHired.slice(startIndex, endIndex);

  const totalPages = Math.ceil(mostPopulartHired.length / itemsPerPage);
  return (
    <>
      <div className="pt-12">
        <div className="grid grid-cols-4 gap-8">
          {currentJobs.map((popularhiree, index) => (
            <Link
              href={popularhiree.id}
              key={index}
              className="flex-shrink-0  bg-[#C9D6B8] rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={popularhiree.img}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 space-y-2">
                <div className="flex items-center justify-between text-white font-medium">
                  <p className="uppercase">
                    {popularhiree.name} {popularhiree.lastname}
                  </p>
                </div>
                <div className="flex items-center justify-between text-white">
                  <p className="text-sm uppercase">{popularhiree.work}</p>
                  <p className="text-sm">⭐ {popularhiree.rating}</p>
                </div>
                {popularhiree.location && (
                  <p className="text-white text-xs">
                    📍 {popularhiree.location}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-6 flex justify-center">
          <Pagination>
            <PaginationContent>
              {/* Previous */}
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                />
              </PaginationItem>

              {/* Pages */}
              {Array.from({ length: totalPages }, (_, i) => (
                <PaginationItem key={i}>
                  <PaginationLink
                    href="#"
                    isActive={currentPage === i + 1}
                    onClick={() => setCurrentPage(i + 1)}
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}

              {totalPages > 5 && <PaginationEllipsis />}

              {/* Next */}
              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </>
  );
}
