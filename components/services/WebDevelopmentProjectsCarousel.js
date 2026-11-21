'use client';

import { useCallback, useRef } from 'react';
import Link from 'next/link';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ALL_PROJECTS } from '@/lib/projectsData';
import ProjectCard from '@/components/projects/ProjectCard';

export default function WebDevelopmentProjectsCarousel() {
  const autoplay = useRef(
    Autoplay({ delay: 3600, stopOnInteraction: false, stopOnMouseEnter: false })
  );
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: 'start', dragFree: true, skipSnaps: false },
    [autoplay.current]
  );

  const pauseAutoplay = useCallback(() => autoplay.current.stop(), []);
  const resumeAutoplay = useCallback(() => autoplay.current.play(), []);
  const handleBlur = useCallback((event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) resumeAutoplay();
  }, [resumeAutoplay]);

  return (
    <section className="w-full flex flex-col gap-6 sm:gap-8" aria-labelledby="web-projects-heading">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-wider font-bold text-navTextHover font-headingfont">Portfolio Showcase</p>
          <h2 id="web-projects-heading" className="mt-1 text-2xl sm:text-4xl font-bold tracking-tight text-textHeading font-headingfont">Our Previous Work</h2>
          <p className="mt-2 max-w-2xl font-bodyfont text-sm sm:text-base text-textDescription">Explore the digital experiences we have designed and developed for ambitious businesses.</p>
        </div>
        <Link href="/projects" className="self-start sm:self-auto inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-navTextHover hover:underline font-headingfont group/link">
          View All Projects
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 transition-transform group-hover/link:translate-x-1" aria-hidden="true"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
        </Link>
      </div>

      <div
        ref={emblaRef}
        className="w-full overflow-hidden cursor-grab active:cursor-grabbing py-2 -my-2"
        onMouseEnter={pauseAutoplay}
        onMouseLeave={resumeAutoplay}
        onFocusCapture={pauseAutoplay}
        onBlurCapture={handleBlur}
        aria-label="Projects carousel. Hover or focus a project to pause automatic scrolling."
      >
        <div className="flex -ml-4 sm:-ml-5">
          {ALL_PROJECTS.map((project) => (
            <div key={project.slug} className="min-w-0 shrink-0 grow-0 basis-[88%] pl-4 sm:basis-1/2 sm:pl-5 xl:basis-1/3">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
