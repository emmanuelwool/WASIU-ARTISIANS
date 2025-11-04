
'use client'
import { mostPopulartHired } from '@/mocks/AllMock';
import Image from 'next/image';
import { useParams } from 'next/navigation'
import React from 'react';
const Page = () => {
    const { id } = useParams<{ id: string }>()
      const artisan = mostPopulartHired.find((a) => a.id === id);
          if (!artisan) return <div>Artisan not found</div>;
    return (
        <div>
          <div className="">
            <div className="">
 <div className="p-6 md:p-10 space-y-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row gap-6">
        <Image
          src={artisan.img}
          alt={artisan.name}
          width={400}
          height={400}
          className="rounded-xl object-cover"
        />
        <div className="space-y-3 text-gray-800">
          <h1 className="text-3xl font-bold">
            {artisan.name} {artisan.lastname}
          </h1>
          <p className="text-lg text-gray-600 italic">{artisan.work}</p>
          <p className="text-sm text-gray-500">📍 {artisan.location}</p>
          <p className="text-yellow-500 font-semibold">⭐ {artisan.rating}</p>
        </div>
      </div>

      {/* Bio / Description */}
      <div className="bg-gray-100 p-5 rounded-xl text-sm leading-relaxed">
        <h2 className="text-xl font-semibold mb-2">About</h2>
        <p>
          {artisan.bio ||
            "A passionate craftsman dedicated to delivering high-quality handmade work with love and expertise."}
        </p>
      </div>

      {/* Projects / Portfolio */}
      {artisan.projects && artisan.projects.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mb-3">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {artisan.projects.map((project, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow hover:shadow-md transition-all overflow-hidden"
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-3">
                  <p className="font-medium">{project.title}</p>
                  <p className="text-xs text-gray-500">{project.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
            </div>
          </div>
        </div>
    );
}

export default Page;
