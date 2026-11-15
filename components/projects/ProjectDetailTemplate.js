'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ALL_PROJECTS } from '@/lib/projectsData';
import ProjectCard from '@/components/projects/ProjectCard';

export default function ProjectDetailTemplate({ project }) {
  const [activeSection, setActiveSection] = useState(
    project?.toc?.[0]?.id || 'overview'
  );

  useEffect(() => {
    const handleScroll = () => {
      if (!project?.toc) return;
      const scrollPosition = window.scrollY + 200;
      for (let i = project.toc.length - 1; i >= 0; i--) {
        const item = project.toc[i];
        const el = document.getElementById(item.id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(item.id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [project]);

  if (!project) return null;

  const otherProjects = ALL_PROJECTS.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <div className="flex flex-col items-center w-full font-headingfont bg-background text-textHeading relative transition-all duration-200">
      {/* Ambient Corner Glows (Clean minimal gradient matching blog/reference) */}
      <img
        alt=""
        role="presentation"
        className="corner-art hero-bg-img-1 absolute -top-14 sm:-top-16 left-0 z-0 pointer-events-none h-auto w-[140px] xxs:w-[160px] xs:w-[190px] sm:w-[240px] md:w-[300px] lg:w-[360px] xl:w-[400px] min-[1440px]:w-[480px] 2xl:w-[540px]"
        style={{ '--corner-from-x': '-40px' }}
        src="/HeroLeftCornerBG.svg"
      />
      <img
        alt=""
        role="presentation"
        className="corner-art hero-bg-img-2 absolute -top-14 sm:-top-16 right-0 z-0 pointer-events-none h-auto w-[140px] xxs:w-[160px] xs:w-[190px] sm:w-[240px] md:w-[300px] lg:w-[360px] xl:w-[400px] min-[1440px]:w-[480px] 2xl:w-[540px]"
        style={{ '--corner-from-x': '40px' }}
        src="/HeroRightCornerBG.svg"
      />

      <div className="w-full relative z-10 flex flex-col items-center">
        <div className="w-full flex flex-col items-center mt-28 xxxs:mt-24 xxs:mt-24 xs:mt-28 sm:mt-32 md:mt-32 lg:mt-36 xl:mt-40 mb-20 z-10">
          <div className="w-full flex flex-col items-center relative">
            {/* Back to Projects Breadcrumb */}
            <div className="blueprint-row spotlight-line w-full flex justify-center relative border-y">
              <div className="spotlight-line w-10/12 xxxs:w-11/12 xxs:w-11/12 xs:w-10/12 sm:w-11/12 md:w-10/12 2xl:max-w-[1440px] shrink-0 sm:border-x px-4 sm:px-6 py-3">
                <div className="shrink flex">
                  <Link 
                    className="flex gap-2 items-center text-textDescription hover:text-navTextHover transition-colors duration-200 group font-headingfont" 
                    href="/projects"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" aria-hidden="true">
                      <path d="m12 19-7-7 7-7"></path>
                      <path d="M19 12H5"></path>
                    </svg>
                    <p className="font-bold text-lg sm:text-xl">Projects</p>
                  </Link>
                </div>
              </div>
            </div>

            {/* Project Header Info */}
            <div className="blueprint-row spotlight-line w-full flex justify-center relative border-b">
              <div className="spotlight-line w-10/12 xxxs:w-11/12 xxs:w-11/12 xs:w-10/12 sm:w-11/12 md:w-10/12 2xl:max-w-[1440px] shrink-0 sm:border-x px-4 sm:px-8 pt-8 pb-6">
                <div className="w-full flex flex-col gap-6">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                      <span className="rounded-full border border-border bg-cardBg py-1 px-3.5 text-xs font-semibold text-textDescription font-bodyfont shadow-sm">
                        {project.category}
                      </span>
                    </div>

                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="h-11 sm:h-12 flex items-center justify-between pl-4 sm:pl-5 pr-2 gap-3 sm:gap-4 rounded-xl bg-serviceBtnBg border border-border hover:border-[#8356FB] hover:bg-[#8356FB] text-textHeading hover:text-white transition-all duration-200 group/live shadow-sm"
                      >
                        <span className="font-semibold text-xs sm:text-sm font-headingfont whitespace-nowrap">Visit Live Site</span>
                        <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-navTextHover flex items-center justify-center text-white group-hover/live:bg-white group-hover/live:text-navTextHover transition-all duration-200 flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link w-3.5 h-3.5" aria-hidden="true">
                            <path d="M15 3h6v6"></path>
                            <path d="M10 14 21 3"></path>
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          </svg>
                        </span>
                      </a>
                    )}
                  </div>

                  <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-[1.08] tracking-tight text-textHeading font-headingfont">
                    {project.title}
                  </h1>

                  {project.headline && project.headline !== project.title && (
                    <p className="font-headingfont text-lg sm:text-2xl font-medium text-navTextHover leading-snug">
                      {project.headline}
                    </p>
                  )}

                  <p className="font-bodyfont text-base sm:text-xl leading-relaxed text-textDescription max-w-[52rem]">
                    {project.intro || project.description}
                  </p>

                  {/* Metadata Row */}
                  <dl className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-5 pt-5 spotlight-line border-t font-bodyfont">
                    <div className="flex flex-col gap-1 min-w-0">
                      <dt className="text-[11px] uppercase tracking-wider text-textDescription font-semibold">Year</dt>
                      <dd className="text-sm sm:text-base font-semibold text-textHeading">{project.year || '2025'}</dd>
                    </div>
                    <div className="flex flex-col gap-1 min-w-0">
                      <dt className="text-[11px] uppercase tracking-wider text-textDescription font-semibold">Industry</dt>
                      <dd className="text-sm sm:text-base font-semibold text-textHeading">{project.category}</dd>
                    </div>
                    <div className="flex flex-col gap-1 min-w-0">
                      <dt className="text-[11px] uppercase tracking-wider text-textDescription font-semibold">Services</dt>
                      <dd className="text-sm sm:text-base font-semibold text-textHeading">Full-Stack Web, UI/UX, SEO</dd>
                    </div>
                    <div className="flex flex-col gap-1 min-w-0">
                      <dt className="text-[11px] uppercase tracking-wider text-textDescription font-semibold">Status</dt>
                      <dd className="text-sm sm:text-base font-semibold text-navTextHover">Production Live</dd>
                    </div>
                  </dl>

                  {/* Tags */}
                  {project.tags && (
                    <ul className="flex flex-wrap gap-2 pt-1 list-none p-0 m-0">
                      {project.tags.map((tag, tIdx) => (
                        <li key={tIdx} className="font-bodyfont text-xs font-medium px-2.5 py-1 rounded-md border border-border bg-cardBg text-textDescription">
                          {tag}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>

            {/* Featured Image Banner - Homepage First View / Hero */}
            {(project.heroImage || project.cover) && (
              <div className="blueprint-row spotlight-line w-full flex justify-center relative border-b">
                <div className="spotlight-line w-10/12 xxxs:w-11/12 xxs:w-11/12 xs:w-10/12 sm:w-11/12 md:w-10/12 2xl:max-w-[1440px] shrink-0 sm:border-x p-3 sm:p-6">
                  <div className="border border-border bg-[#0a0a0a] w-full aspect-[16/9] max-h-[640px] rounded-xl sm:rounded-2xl overflow-hidden relative shadow-lg flex items-center justify-center">
                    <img 
                      alt={`${project.title} — Homepage Hero view`} 
                      className="object-cover object-top w-full h-full" 
                      src={project.heroImage || `/images/projects/${project.slug}-hero.webp`} 
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Main Article & Table of Contents */}
            <div className="blueprint-row spotlight-line w-full flex justify-center relative border-b">
              <div className="spotlight-line w-10/12 xxxs:w-11/12 xxs:w-11/12 xs:w-10/12 sm:w-11/12 md:w-10/12 2xl:max-w-[1440px] shrink-0 sm:border-x px-4 sm:px-8 py-8 sm:py-14">
                <div className="w-full flex flex-col lg:flex-row items-start gap-10 lg:gap-14 xl:gap-20">
                  {/* Sticky Desktop TOC */}
                  {project.toc && project.toc.length > 0 && (
                    <aside className="hidden lg:block w-60 xl:w-72 shrink-0 sticky top-32 self-start pr-4">
                      <nav aria-label="Table of Contents" className="w-full">
                        <p className="font-headingfont text-xl sm:text-2xl font-bold text-textHeading mb-4 tracking-tight">
                          Table of Content
                        </p>
                        <ul className="space-y-1 spotlight-line border-l pl-0 list-none m-0 p-0 font-bodyfont text-sm">
                          {project.toc.map((item) => {
                            const isActive = activeSection === item.id;
                            return (
                              <li key={item.id} className="relative">
                                {isActive && (
                                  <span className="absolute -left-[1px] top-0 bottom-0 w-[2px] bg-navTextHover rounded-full"></span>
                                )}
                                <a 
                                  href={`#${item.id}`} 
                                  className={`block py-1.5 transition-colors duration-200 leading-snug pl-4 ${
                                    isActive ? 'text-navTextHover font-semibold' : 'text-textDescription hover:text-textHeading'
                                  }`}
                                >
                                  {item.title}
                                </a>
                              </li>
                            );
                          })}
                        </ul>
                      </nav>
                    </aside>
                  )}

                  {/* Body Content */}
                  <div className="flex-1 min-w-0 w-full pr-2 sm:pr-6 lg:pr-12 xl:pr-16">
                    <article className="w-full font-bodyfont">
                      <div className="prose prose-lg dark:prose-invert max-w-none text-textHeading font-bodyfont">
                        {project.sections?.map((section) => (
                          <div key={section.id} className="mb-12">
                            <h2 
                              id={section.id} 
                              className="font-headingfont text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mt-10 mb-5 text-textHeading tracking-tight scroll-mt-36 border-l-4 border-navTextHover pl-4"
                            >
                              {section.heading}
                            </h2>

                            {section.paragraphs?.map((p, pIdx) => (
                              <p key={pIdx} className="font-bodyfont text-base sm:text-lg leading-relaxed text-textDescription mb-6">
                                {p}
                              </p>
                            ))}

                            {section.bullets && (
                              <ul className="font-bodyfont list-disc pl-6 my-4 space-y-2 text-base sm:text-lg text-textDescription marker:text-navTextHover">
                                {section.bullets.map((b, bIdx) => (
                                  <li key={bIdx} className="leading-relaxed">
                                    <strong className="font-bold text-textHeading">{b}</strong>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        ))}

                        <blockquote className="font-bodyfont text-lg sm:text-xl pl-5 py-4 font-normal border-l-4 border-navTextHover italic my-8 text-textHeading bg-cardBg/60 border-y border-r border-border rounded-r-2xl shadow-sm">
                          Engineered with modern web architecture for high performance, mobile usability, and long-term search visibility.
                        </blockquote>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>

            {/* More Projects Section */}
            <div className="blueprint-row spotlight-line w-full flex justify-center relative border-b">
              <div className="spotlight-line w-10/12 xxxs:w-11/12 xxs:w-11/12 xs:w-10/12 sm:w-11/12 md:w-10/12 2xl:max-w-[1440px] shrink-0 sm:border-x px-4 sm:px-6 py-4 flex items-center justify-between">
                <p className="text-2xl sm:text-3xl font-bold tracking-tight text-textHeading font-headingfont">
                  More Projects
                </p>
                <Link
                  href="/projects"
                  className="text-xs sm:text-sm font-semibold text-navTextHover hover:underline flex items-center gap-1 group font-headingfont"
                >
                  <span>View All Projects</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-0.5">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>

            {/* More Projects Grid using standard ProjectCard */}
            <div className="blueprint-row spotlight-line w-full flex justify-center relative border-b">
              <div className="spotlight-line w-10/12 xxxs:w-11/12 xxs:w-11/12 xs:w-10/12 sm:w-11/12 md:w-10/12 2xl:max-w-[1440px] shrink-0 sm:border-x px-4 sm:px-6 py-6 sm:py-8 lg:py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                  {otherProjects.map((item) => (
                    <ProjectCard key={item.slug} project={item} />
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

