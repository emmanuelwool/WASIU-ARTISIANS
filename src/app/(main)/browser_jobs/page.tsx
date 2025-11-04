"use client";

import { useState } from "react";
import { JobsMock } from "@/mocks/AllMock";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationLink,
  PaginationEllipsis,
} from "@/components/ui/pagination";

export default function JobsList() {
  const itemsPerPage = 20; // Nombre d'éléments par page
  const [currentPage, setCurrentPage] = useState(1);

  // Calcul des éléments à afficher
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentJobs = JobsMock.slice(startIndex, endIndex);

  const totalPages = Math.ceil(JobsMock.length / itemsPerPage);

  return (
    <>
    <div className="pt-12">

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 ">
        {currentJobs.map((job, index) => (
          <div className="rounded-xl shadow p-4" key={index}>
            <div className="space-y-4">
              <p className="font-medium">{job.title}</p>
              <div className="space-y-1.5">
                <p>{job.desc}</p>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <p>{job.price}</p>
                  <p>{job.date}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

      {/* Pagination */}
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
    </>
  );
}
