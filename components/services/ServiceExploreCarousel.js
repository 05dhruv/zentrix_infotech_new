'use client';

import { useCallback, useMemo, useRef } from 'react';
import Link from 'next/link';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { servicesData } from '@/lib/servicesData';

const NAV_SERVICE_SLUGS = [
  'digital-marketing',
  'digital-marketing/seo',
  'digital-marketing/social-media-optimization',
  'digital-marketing/ads-management',
  'software-development',
  'web-development',
  'app-development',
  'video-shoot-editing',
];
export default function ServiceExploreCarousel({ currentService }) {
  const services = useMemo(
    () => NAV_SERVICE_SLUGS.map((slug) => servicesData[slug]).filter((service) => service && service.slug !== currentService),
    [currentService]
  );
  const autoplay = useRef(Autoplay({ delay: 3800, stopOnInteraction: false, stopOnMouseEnter: false }));
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start', dragFree: true, skipSnaps: false },
    [autoplay.current]
  );
  const pause = useCallback(() => autoplay.current.stop(), []);
  const resume = useCallback(() => autoplay.current.play(), []);
  const onBlur = useCallback((event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) resume();
  }, [resume]);

  return (
    <section className="w-full" aria-labelledby="explore-services-heading">
      <div className="mb-6 flex flex-col gap-2 sm:mb-7">
        <p className="text-xs uppercase tracking-wider font-bold text-navTextHover font-headingfont">What we do</p>
        <h2 id="explore-services-heading" className="text-2xl sm:text-4xl font-bold tracking-tight text-textHeading font-headingfont">Explore Other Services</h2>
        <p className="max-w-2xl font-bodyfont text-sm sm:text-base text-textDescription">From strategy to launch, discover the specialist teams that can move your next idea forward.</p>
      </div>
      <div ref={emblaRef} onMouseEnter={pause} onMouseLeave={resume} onFocusCapture={pause} onBlurCapture={onBlur} className="overflow-hidden cursor-grab active:cursor-grabbing py-2 -my-2" aria-label="Services carousel. Hover or focus a service to pause automatic scrolling.">
        <div className="flex -ml-4 sm:-ml-5">
          {services.map((service) => (
            <div key={service.slug} className="min-w-0 shrink-0 grow-0 basis-[88%] pl-4 sm:basis-1/2 sm:pl-5 xl:basis-1/3">
              <Link href={`/services/${service.slug}`} className="group relative flex h-full min-h-[390px] flex-col overflow-hidden rounded-2xl border border-border bg-cardBg p-3 sm:p-4 shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-none transition-all duration-300 hover:-translate-y-1 hover:border-[#8356FB] hover:shadow-[0_16px_35px_rgba(131,86,251,.18)]">
                <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-border bg-background">
                  <img src={service.image} alt={service.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  <span className="absolute left-2.5 top-2.5 rounded-full border border-white/15 bg-black/65 px-2.5 py-1 text-[10px] font-semibold text-white backdrop-blur-md">{service.category}</span>
                </div>
                <div className="flex flex-1 flex-col px-1 pt-4">
                  <p className="font-bodyfont text-xs font-medium text-textDescription">{service.timeline}</p>
                  <h3 className="mt-1 font-headingfont text-xl sm:text-2xl font-bold tracking-tight text-textHeading group-hover:text-navTextHover">{service.title}</h3>
                  <p className="mt-2 line-clamp-3 font-bodyfont text-sm leading-relaxed text-textDescription">{service.shortDesc}</p>
                  <div className="mt-auto flex items-center justify-between gap-3 border-t border-border/70 pt-4 font-headingfont text-xs font-semibold">
                    <span className="min-w-0 truncate rounded-full border border-border bg-background px-2.5 py-1 text-textDescription">{service.category}</span>
                    <span className="shrink-0 text-navTextHover">Explore <span className="inline-block transition-transform group-hover:translate-x-1">→</span></span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
