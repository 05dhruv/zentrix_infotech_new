'use client';

import { useCallback } from 'react';
import Link from 'next/link';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const DEFAULT_PROJECTS = [
  {
    title: 'Vasterior',
    tag: 'Interior & Spatial Design',
    image: '/images/slider/vasterior.webp',
    description: "Translating Vasterior's philosophy of aesthetics, functionality, and spatial harmony into a considered, balanced, and refined digital experience.",
    timeline: 'Delivered in 4 Weeks',
    slug: 'vasterior',
    href: '/projects/vasterior',
  },
  {
    title: 'PS Decor',
    tag: 'Luxury Events & Wedding Decor',
    image: '/images/slider/ps_decor.webp',
    description: 'Translating the visual grandeur of bespoke luxury wedding planning, royal mandaps, and curated celebratory environments into an immersive digital portfolio.',
    timeline: 'Delivered in 3 Weeks',
    slug: 'ps-decor',
    href: '/projects/ps-decor',
  },
  {
    title: 'MTBoss Construction',
    tag: 'Construction & Home Services',
    image: '/images/slider/mt_boss.webp',
    description: 'A comprehensive digital ecosystem catering to builders, property owners, and renovators, seamlessly bridging turnkey construction, architectural consults, and materials.',
    timeline: 'Delivered in 4 Weeks',
    slug: 'mt-boss',
    href: '/projects/mt-boss',
  },
  {
    title: 'Balprada Ashram',
    tag: 'Healthcare & Ayurvedic Hospital',
    image: '/images/slider/balprada_ashram.webp',
    description: 'A holistic digital ecosystem for a 35-year Ayurvedic legacy, integrating specialized clinical treatments, Panchakarma therapies, and community seva.',
    timeline: 'Delivered in 3.5 Weeks',
    slug: 'balprada-ashram',
    href: '/projects/balprada-ashram',
  },
];

export default function PreviousWorkCarousel({ projects = DEFAULT_PROJECTS }) {
  // Four cards are not enough for Embla to keep a three-card desktop viewport
  // in loop mode. Repeating the set gives it the extra track length needed for
  // a seamless 1 → 2 → 3 → 4 → 1 cycle.
  const carouselProjects = [...projects, ...projects];

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
      skipSnaps: false,
      dragFree: true,
    },
    [
      Autoplay({
        delay: 3000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
  );

  return (
    <div className="w-full flex flex-col gap-6">
      {/* Header Row */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <span className="text-xs uppercase tracking-wider font-bold text-navTextHover font-headingfont">
            Portfolio Showcase
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-textHeading font-headingfont mt-1">
            Our Previous Work
          </h2>
        </div>

        <div className="flex items-center self-start sm:self-auto">
          <Link
            href="/projects"
            className="text-xs sm:text-sm font-semibold text-navTextHover hover:underline flex items-center gap-1 group/link font-headingfont"
          >
            <span>View All Projects</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </div>

      {/* Embla Carousel Viewport */}
      <div
        className="w-full overflow-hidden cursor-grab active:cursor-grabbing pt-2 pb-2"
        ref={emblaRef}
      >
        <div className="flex -ml-5">
          {carouselProjects.map((project, index) => (
            <div
              key={`${project.slug || 'project'}-${index}`}
              className="min-w-0 shrink-0 grow-0 pl-5 basis-full sm:basis-1/2 lg:basis-1/3"
            >
              <Link
                href={project.href}
                data-project-card="true"
                className="border border-border bg-cardBg rounded-2xl p-4 flex flex-col justify-between hover:border-[#8356FB] hover:shadow-[0_0_25px_rgba(131,86,251,0.25)] transition-all duration-300 shadow-sm group h-full block cursor-pointer select-none"
              >
                {/* Visual Image with Tag Pill */}
                <div className="w-full aspect-[16/10] rounded-xl overflow-hidden relative mb-4 bg-black/20">
                  <img
                    src={project.image}
                    alt={`${project.title} — Portfolio project by Zentrix Infotech`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-black/75 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-semibold text-white border border-white/10 shadow-sm">
                    {project.tag}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2 flex-1">
                  <h3 className="text-lg font-bold text-textHeading group-hover:text-navTextHover transition-colors font-headingfont">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-textDescription line-clamp-2 font-bodyfont leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Card Footer */}
                <div className="pt-4 mt-4 flex items-center justify-between border-t border-border/60 text-xs font-semibold">
                  <span className="text-textDescription font-bodyfont">
                    {project.timeline}
                  </span>
                  <span className="text-navTextHover group-hover:underline flex items-center gap-1 font-headingfont">
                    Case Study →
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
