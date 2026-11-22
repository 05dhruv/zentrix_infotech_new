'use client';

import Link from 'next/link';
import { servicesNavConfig } from './NavServicesDropdown';

const linkClass = 'font-bodyfont text-sm leading-6 text-textDescription transition-colors hover:text-[#8356fb] dark:hover:text-[#bca8ff]';
const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/zentrixinfotech', symbol: 'in' },
  { label: 'Instagram', href: 'https://www.instagram.com/zentrixinfotech/', symbol: 'ig' },
  { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61572870601261', symbol: 'f' },
];

function ContactLink({ href, children, type = 'phone' }) {
  const style = type === 'phone' ? 'bg-emerald-500/10 text-emerald-500' : type === 'email' ? 'bg-[#8356fb]/10 text-[#8356fb]' : 'bg-[#8356fb]/10 text-[#8356fb]';
  const label = type === 'phone' ? 'Call' : type === 'email' ? 'Mail' : 'Map';
  return <a href={href} className="flex items-center gap-3 transition hover:text-textHeading"><span className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl text-[10px] font-bold ${style}`}>{label}</span><span>{children}</span></a>;
}

export default function Footer() {
  return (
    <footer className="relative mt-20 overflow-hidden border-t border-border bg-background text-textHeading">
      <div aria-hidden="true" className="pointer-events-none absolute -left-32 top-12 h-80 w-80 rounded-full bg-[#8356fb]/10 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-28 bottom-0 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="relative mx-auto w-11/12 max-w-[1440px] py-14 sm:w-10/12 lg:py-20">
        <div className="grid gap-12 border-b border-border pb-12 lg:grid-cols-[1.35fr_1fr_.8fr_.8fr] lg:gap-10">
          <section className="max-w-md">
            <Link href="/" aria-label="Zentrix Infotech home" className="inline-flex transition-transform hover:-translate-y-1">
              <img className="hidden h-9 w-auto dark:block" src="/images/zentrix-logo-white.png" width="232" height="56" alt="Zentrix Infotech" />
              <img className="h-9 w-auto dark:hidden" src="/images/zentrix-logo.png" width="232" height="56" alt="Zentrix Infotech" />
            </Link>
            <h2 className="mt-6 font-headingfont text-3xl font-bold tracking-tight sm:text-4xl">Zentrix Infotech</h2>
            <p className="mt-4 font-bodyfont text-base leading-7 text-textDescription">Transforming ideas into useful digital products, memorable experiences, and sustainable growth.</p>
            <div className="mt-7 space-y-4 font-bodyfont text-sm leading-6 text-textDescription">
              <ContactLink type="map" href="https://maps.google.com/?q=12/11+Buddhi+Vihar+Phase+2+Moradabad+Uttar+Pradesh+244001">12/11, Buddhi Vihar Phase 2, Moradabad, Uttar Pradesh 244001</ContactLink>
              <ContactLink href="tel:+917248800839">+91 72488 00839</ContactLink>
              <ContactLink href="tel:+916397036898">+91 63970 36898</ContactLink>
              <ContactLink type="email" href="mailto:info@zentrixinfotech.com">info@zentrixinfotech.com</ContactLink>
            </div>
          </section>
          <section>
            <h2 className="font-headingfont text-lg font-bold">Services</h2>
            <nav aria-label="Services links" className="mt-5 flex flex-col gap-3">{servicesNavConfig.map((service) => <Link key={service.href} className={linkClass} href={service.href}>{service.name}</Link>)}</nav>
            <Link href="/services" className="mt-5 inline-flex items-center gap-2 font-bodyfont text-sm font-bold text-[#8356fb] transition hover:gap-3">View all services <span aria-hidden="true">&rarr;</span></Link>
          </section>
          <section>
            <h2 className="font-headingfont text-lg font-bold">Company</h2>
            <nav aria-label="Company links" className="mt-5 flex flex-col gap-3"><Link className={linkClass} href="/about">About us</Link><Link className={linkClass} href="/projects">Our work</Link><Link className={linkClass} href="/products">Products</Link><Link className={linkClass} href="/blog">Blog</Link><Link className={linkClass} href="/contact">Contact us</Link></nav>
          </section>
          <section>
            <h2 className="font-headingfont text-lg font-bold">Legal</h2>
            <nav aria-label="Legal links" className="mt-5 flex flex-col gap-3"><Link className={linkClass} href="/privacy-policy">Privacy policy</Link><Link className={linkClass} href="/terms">Terms of service</Link><Link className={linkClass} href="/cancellation-and-refund">Refund policy</Link><Link className={linkClass} href="/cookie-policy">Cookie policy</Link></nav>
            <h3 className="mt-9 font-headingfont text-base font-bold">Follow us</h3>
            <div className="mt-4 flex gap-3">{socialLinks.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={`Follow Zentrix Infotech on ${social.label}`} className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-cardBg text-xs font-bold text-textDescription transition hover:-translate-y-1 hover:border-[#8356fb]/50 hover:text-[#8356fb]">{social.symbol}</a>)}</div>
          </section>
        </div>
        <div className="flex flex-col gap-3 pt-6 font-bodyfont text-xs text-textDescription sm:flex-row sm:items-center sm:justify-between"><p>&copy; {new Date().getFullYear()} Zentrix Infotech LLP. All rights reserved.</p><p>Built with clarity, creativity, and care.</p></div>
      </div>
    </footer>
  );
}
