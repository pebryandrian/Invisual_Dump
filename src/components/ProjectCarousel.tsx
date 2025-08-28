'use client'; // Carousel biasanya butuh interaktivitas, jadi ini adalah Client Component

import Link from 'next/link';
import Image from 'next/image';

// Import library carousel yang Anda gunakan, contohnya Embla, Swiper, atau lainnya
// Di sini saya akan membuat struktur dasar saja
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'; // Asumsi Anda menggunakan Shadcn/ui carousel

// Definisikan tipe data untuk props
type Project = {
  id: string;
  title: string;
  imageUrl: string;
};

interface ProjectCarouselProps {
  projects: Project[];
}

export default function ProjectCarousel({ projects }: ProjectCarouselProps) {
  if (!projects || projects.length === 0) {
    return <p>No featured projects to display.</p>;
  }

  return (
    <Carousel
      opts={{
        align: 'start',
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent>
        {projects.map((project) => (
          // PENTING: Bungkus CarouselItem dengan <Link>
          <CarouselItem key={project.id} className="md:basis-1/2 lg:basis-1/3">
            <Link href={`/projects/detail/${project.id}`} className="block group">
              <div className="relative overflow-hidden rounded-lg aspect-video">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-4">
                  <h3 className="text-white text-lg font-bold">{project.title}</h3>
                </div>
              </div>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}