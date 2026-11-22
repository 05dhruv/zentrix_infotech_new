'use client';
import Link from 'next/link';

const linkClass = 'text-sm text-[#555064] transition-colors hover:text-[#6d43dc] dark:text-white/65 dark:hover:text-white';

export default function Footer() {
  return (
    <footer className="relative mt-20 overflow-hidden border-t border-[#ded9ee] bg-[#f8f7fc] text-[#1d1828] dark:border-white/10 dark:bg-[#0d0c14] dark:text-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(ellipse_at_top,rgba(131,86,251,.14),transparent_68%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(131,86,251,.24),transparent_68%)]" />
      <div aria-hidden="true" className="pointer-events-none absolute right-[-12rem] top-12 h-80 w-80 rounded-full border border-[#8356fb]/20" />

      <div className="relative mx-auto w-10/12 max-w-[1440px] py-12 xxxs:w-11/12 sm:py-16">
        <div className="mb-12 flex flex-col gap-8 border-b border-[#ded9ee] pb-10 md:flex-row md:items-end md:justify-between dark:border-white/10">
          <div className="max-w-xl">
            <Link href="/" aria-label="Zentrix Infotech home" className="inline-block">
              <img className="hidden h-9 w-auto dark:block" src="/images/zentrix-logo-white.png" width="232" height="56" alt="Zentrix Infotech" />
              <img className="h-9 w-auto dark:hidden" src="/images/zentrix-logo.png" width="232" height="56" alt="Zentrix Infotech" />
            </Link>
            <p className="mt-5 max-w-md font-bodyfont text-sm leading-6 text-[#625d70] dark:text-white/65">Digital products, experiences, and growth systems built to move your business forward.</p>
            <div className="mt-6 flex items-center gap-3">
              <span className="mr-1 text-xs font-bold tracking-[.14em] text-[#706a7a] uppercase dark:text-white/45">Follow us</span>
              <a href="https://www.linkedin.com/company/zentrixinfotech" target="_blank" rel="noopener noreferrer" aria-label="Follow Zentrix Infotech on LinkedIn" className="group grid h-10 w-10 place-items-center rounded-xl border border-[#ded9ee] bg-white/70 text-[#2867b2] shadow-sm transition hover:-translate-y-1 hover:border-[#2867b2]/40 hover:shadow-[0_10px_22px_rgba(40,103,178,.18)] dark:border-white/10 dark:bg-white/5 dark:text-[#78a9df]">
                <svg viewBox="0 0 448 512" className="h-4 w-4" fill="currentColor" aria-hidden="true"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3C448 46.5 433.6 32 416 32zM135.4 416H69V202.2h66.5V416zM102.2 173c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.2-17.2 38.5-38.5 38.5zM384.3 416h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg>
              </a>
              <a href="https://www.instagram.com/zentrixinfotech/" target="_blank" rel="noopener noreferrer" aria-label="Follow Zentrix Infotech on Instagram" className="group grid h-10 w-10 place-items-center rounded-xl border border-[#ded9ee] bg-white/70 text-[#d94675] shadow-sm transition hover:-translate-y-1 hover:border-[#d94675]/40 hover:shadow-[0_10px_22px_rgba(217,70,117,.18)] dark:border-white/10 dark:bg-white/5 dark:text-[#f58aaa]">
                <svg viewBox="0 0 448 512" className="h-4 w-4" fill="currentColor" aria-hidden="true"><path d="M224.1 141c-63.6 0-114.7 51.1-114.7 114.7s51.1 114.7 114.7 114.7 114.7-51.1 114.7-114.7S287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8s-26.8-12-26.8-26.8 12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1S3.3 127.5 1.5 163.4c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-102.7-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 102.7 9 132.1s2.7 102.7-9 132.1z" /></svg>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61572870601261" target="_blank" rel="noopener noreferrer" aria-label="Follow Zentrix Infotech on Facebook" className="group grid h-10 w-10 place-items-center rounded-xl border border-[#ded9ee] bg-white/70 text-[#1877f2] shadow-sm transition hover:-translate-y-1 hover:border-[#1877f2]/40 hover:shadow-[0_10px_22px_rgba(24,119,242,.18)] dark:border-white/10 dark:bg-white/5 dark:text-[#79aefa]">
                <svg viewBox="0 0 512 512" className="h-4 w-4" fill="currentColor" aria-hidden="true"><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256c0 123.8 90.7 226.4 209.3 245V327.7h-63V256h63v-54.6c0-62.2 37-96.5 93.7-96.5 27.1 0 55.5 4.8 55.5 4.8v61h-31.3c-30.8 0-40.4 19.1-40.4 38.7V256h68.8l-11 71.7h-57.8V501C421.3 482.4 512 379.8 512 256z" /></svg>
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-2 font-bodyfont text-xs text-[#625d70] dark:text-white/60">
              <span className="rounded-full border border-[#ded9ee] bg-white/60 px-3 py-1.5 dark:border-white/10 dark:bg-white/5">Web &amp; app development</span>
              <span className="rounded-full border border-[#ded9ee] bg-white/60 px-3 py-1.5 dark:border-white/10 dark:bg-white/5">Digital growth</span>
              <span className="rounded-full border border-[#ded9ee] bg-white/60 px-3 py-1.5 dark:border-white/10 dark:bg-white/5">Brand experiences</span>
            </div>
          </div>
          <div className="w-full max-w-[480px] overflow-hidden rounded-2xl border border-[#dcd3f7] bg-[linear-gradient(135deg,rgba(131,86,251,.16),rgba(255,255,255,.76))] p-6 shadow-[0_18px_45px_rgba(75,52,125,.12)] dark:border-white/10 dark:bg-[linear-gradient(135deg,rgba(131,86,251,.28),rgba(20,18,31,.84))] dark:shadow-[0_18px_45px_rgba(0,0,0,.25)] sm:p-7">
            <div className="flex items-center gap-2 text-xs font-bold tracking-[.14em] text-[#6d43dc] uppercase dark:text-[#c4b5fd]"><span className="h-2 w-2 rounded-full bg-[#2dd4bf] shadow-[0_0_0_4px_rgba(45,212,191,.16)]" /> Available for new projects</div>
            <h2 className="mt-4 max-w-sm text-2xl font-bold leading-tight tracking-tight text-[#201a2c] dark:text-white sm:text-3xl">Have an idea worth building?</h2>
            <p className="mt-3 max-w-md font-bodyfont text-sm leading-6 text-[#625d70] dark:text-white/65">Tell us where you want to go. We’ll help shape the clearest way to get there.</p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Link href="/contact" className="group inline-flex items-center gap-2 rounded-xl bg-[#8356fb] px-5 py-3 font-bodyfont text-sm font-bold text-white shadow-[0_12px_28px_rgba(131,86,251,.3)] transition hover:-translate-y-0.5 hover:bg-[#7044e9]">Start a conversation <span className="transition-transform group-hover:translate-x-1">→</span></Link>
              <span className="font-bodyfont text-xs text-[#706a7a] dark:text-white/50">Reply within 2 business days</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4 lg:grid-cols-[1.35fr_1fr_1fr_1fr] lg:gap-x-12">
          <section className="col-span-2 sm:col-span-2 lg:col-span-1">
            <h2 className="text-xs font-bold tracking-[.16em] text-[#6d43dc] uppercase dark:text-[#b49cff]">Get in touch</h2>
            <div className="mt-5 space-y-3 font-bodyfont text-sm">
              <a className={`${linkClass} block break-all`} href="mailto:info@zentrixinfotech.com">info@zentrixinfotech.com</a>
              <a className={`${linkClass} block`} href="tel:+917248800839">+91 72488 00839</a>
            </div>
          </section>
          <section>
            <h2 className="text-xs font-bold tracking-[.16em] text-[#6d43dc] uppercase dark:text-[#b49cff]">Explore</h2>
            <nav aria-label="Explore links" className="mt-5 flex flex-col gap-3">
              <Link className={linkClass} href="/">Home</Link><Link className={linkClass} href="/services">Services</Link><Link className={linkClass} href="/products">Products</Link><Link className={linkClass} href="/projects">Projects</Link><Link className={linkClass} href="/blog">Blog</Link>
            </nav>
          </section>
          <section>
            <h2 className="text-xs font-bold tracking-[.16em] text-[#6d43dc] uppercase dark:text-[#b49cff]">Company</h2>
            <nav aria-label="Company links" className="mt-5 flex flex-col gap-3">
              <Link className={linkClass} href="/about">About us</Link><Link className={linkClass} href="/contact">Contact us</Link><Link className={linkClass} href="/services">Our services</Link><Link className={linkClass} href="/projects">Our work</Link>
            </nav>
          </section>
          <section>
            <h2 className="text-xs font-bold tracking-[.16em] text-[#6d43dc] uppercase dark:text-[#b49cff]">Legal</h2>
            <nav aria-label="Legal links" className="mt-5 flex flex-col gap-3">
              <Link className={linkClass} href="/privacy-policy">Privacy policy</Link><Link className={linkClass} href="/terms">Terms of service</Link><Link className={linkClass} href="/cancellation-and-refund">Refund policy</Link><Link className={linkClass} href="/cookie-policy">Cookie policy</Link>
            </nav>
          </section>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-[#ded9ee] pt-6 font-bodyfont text-xs text-[#797283] sm:flex-row sm:items-center sm:justify-between dark:border-white/10 dark:text-white/45">
          <p>© 2026 Zentrix Infotech LLP. All rights reserved.</p><p>Built with clarity, creativity, and care.</p>
        </div>
      </div>
    </footer>
  );
}
