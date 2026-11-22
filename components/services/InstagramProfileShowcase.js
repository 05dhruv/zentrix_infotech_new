'use client';

import { useEffect, useState } from 'react';

// Replace these demo values with the three client Instagram profiles when available.
const INSTAGRAM_PROFILES = [
  {
    handle: '@oracleeyehospital',
    name: 'Oracle Eye Hospital',
    niche: 'Optometrist · Moradabad',
    initials: 'OEH',
    accent: 'from-rose-500 via-pink-500 to-orange-400',
    growth: '+109%',
    growthLabel: 'Organic reach',
    followers: '28.2K',
    postCount: '795',
    reach: '249K',
    href: 'https://www.instagram.com/oracleeyehospital?fqnt=MXA0NXNtMTIwdmxvNg==',
    posts: ['#f6b51e', '#f7e3b9', '#f19a72', '#db5e7c', '#f4c6c0', '#89aecd'],
  },
  {
    handle: '@dr.priyanka.gynae',
    name: 'Dr. Priyanka Pachauri',
    niche: 'Senior Consultant · Gynaecology',
    initials: 'PP',
    accent: 'from-indigo-500 via-violet-500 to-sky-400',
    growth: '+112%',
    growthLabel: 'Engagement rate',
    followers: '26.7K',
    postCount: '246',
    reach: '374K',
    href: 'https://www.instagram.com/dr.priyanka.gynae?cnvx=MWlsbnExM3gzY3FsNQ==',
    posts: ['#f2b329', '#ea6897', '#9e5bd3', '#e9f1f0', '#d72d3e', '#c8a176'],
  },
    {
    handle: '@jigyasa_hospital',
    name: 'Jigyasa Hospital',
    niche: 'Healthcare · Moradabad',
    initials: 'JH',
    accent: 'from-cyan-500 via-teal-500 to-emerald-400',
    growth: '+68%',
    growthLabel: 'Profile visits',
    followers: '6,934',
    postCount: '372',
    reach: '86K',
    href: 'https://www.instagram.com/jigyasa_hospital?knvt=MzVrN3htcGFqOGto',
    posts: ['#92c6c6', '#4d8b8c', '#e1efef', '#5c7f80', '#bddbd6', '#266b72'],
  },
];

function InstagramIcon({ className = 'w-4 h-4' }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none" /></svg>;
}

export default function InstagramProfileShowcase() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setActive((current) => (current + 1) % INSTAGRAM_PROFILES.length), 4200);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section aria-labelledby="instagram-showcase-heading" className="w-full overflow-hidden">
      <div className="flex flex-col gap-6 sm:gap-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-navTextHover font-headingfont">Instagram Growth Showcase</p>
            <h2 id="instagram-showcase-heading" className="mt-1 text-2xl font-bold tracking-tight text-textHeading sm:text-4xl font-headingfont">Profiles made to stop the scroll.</h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-textDescription sm:text-base font-bodyfont">A social presence that feels cohesive in the feed, memorable in the mind, and measurable in the metrics.</p>
          </div>
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-cardBg px-3 py-2 text-xs font-semibold text-textDescription font-bodyfont">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Active growth campaigns
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-[.9fr_1.35fr] lg:gap-6">
          <div className="flex flex-col gap-2 rounded-2xl border border-border bg-cardBg p-2 sm:p-3">
            {INSTAGRAM_PROFILES.map((profile, index) => (
              <a key={profile.handle} href={profile.href} target="_blank" rel="noreferrer" onMouseEnter={() => setActive(index)} onFocus={() => setActive(index)} className={`group flex items-center gap-3 rounded-xl p-3 text-left transition-all duration-300 ${active === index ? 'bg-background shadow-sm ring-1 ring-[#8356FB]/50' : 'hover:bg-background/70'}`} aria-label={`Open ${profile.name} on Instagram`}>
                <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-to-br ${profile.accent} p-[2px]`}><span className="grid h-full w-full place-items-center rounded-full bg-cardBg text-xs font-black text-textHeading">{profile.initials}</span></span>
                <span className="min-w-0 flex-1"><span className="block truncate text-sm font-bold text-textHeading font-headingfont">{profile.name}</span><span className="block truncate text-xs text-textDescription font-bodyfont">{profile.handle} · {profile.niche}</span></span>
                <InstagramIcon className={`h-4 w-4 shrink-0 transition-colors ${active === index ? 'text-navTextHover' : 'text-textDescription group-hover:text-navTextHover'}`} />
              </a>
            ))}
            <p className="px-3 pb-2 pt-1 text-[11px] leading-relaxed text-textDescription font-bodyfont">Tap a profile to preview the campaign identity.</p>
          </div>

          <div className="relative min-h-[410px] overflow-hidden rounded-2xl border border-border bg-[#0d0b14] p-4 sm:p-6">
            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#8356FB]/30 blur-3xl" />
            <div className="absolute -bottom-24 left-1/3 h-56 w-56 rounded-full bg-pink-500/20 blur-3xl" />
            <div className="relative mx-auto flex max-w-[500px] items-center justify-center">
              {INSTAGRAM_PROFILES.map((profile, index) => {
                const isActive = active === index;
                return (
                  <a key={profile.handle} href={profile.href} target="_blank" rel="noreferrer" aria-label={`Open ${profile.name} on Instagram`} className={`absolute w-[min(100%,340px)] cursor-pointer rounded-[1.8rem] border border-white/15 bg-[#16131f]/95 p-3 text-white shadow-2xl transition-all duration-700 hover:border-white/40 ${isActive ? 'translate-x-0 translate-y-0 scale-100 opacity-100 z-20' : index < active ? '-translate-x-20 translate-y-6 scale-90 opacity-0 z-0 pointer-events-none' : 'translate-x-20 translate-y-6 scale-90 opacity-0 z-0 pointer-events-none'}`}>
                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                      <div className="flex items-center gap-2.5"><span className={`grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br ${profile.accent} p-[2px]`}><span className="grid h-full w-full place-items-center rounded-full bg-[#16131f] text-[10px] font-black">{profile.initials}</span></span><div><p className="text-sm font-bold">{profile.name}</p><p className="text-[11px] text-white/55">{profile.handle}</p></div></div>
                      <InstagramIcon className="h-5 w-5 text-white/80" />
                    </div>
                    <div className="grid grid-cols-3 gap-2 py-3 text-center"><div><p className="text-sm font-bold">{profile.postCount}</p><p className="text-[10px] text-white/50">posts</p></div><div><p className="text-sm font-bold">{profile.followers}</p><p className="text-[10px] text-white/50">followers</p></div><div><p className="text-sm font-bold text-[#bda6ff]">{profile.growth}</p><p className="text-[10px] text-white/50">growth</p></div></div>
                    <div className="grid grid-cols-3 gap-1.5">{profile.posts.map((color, postIndex) => <div key={postIndex} className="aspect-square overflow-hidden rounded-md" style={{ background: `linear-gradient(135deg, ${color}, #241d31)` }}><div className="h-full w-full bg-[radial-gradient(circle_at_70%_28%,rgba(255,255,255,.42),transparent_22%),linear-gradient(35deg,transparent_45%,rgba(255,255,255,.12)_46%,transparent_58%)]" /></div>)}</div>
                    <div className="mt-3 rounded-xl border border-white/10 bg-white/[.06] px-3 py-2"><p className="text-[10px] uppercase tracking-wider text-white/45">Campaign highlight</p><p className="mt-0.5 text-xs font-semibold">{profile.growth} {profile.growthLabel.toLowerCase()} this quarter</p></div>
                  </a>
                );
              })}
              <div className="h-[378px]" aria-hidden="true" />
            </div>
            <div className="absolute bottom-4 left-0 right-0 z-30 flex justify-center gap-1.5">{INSTAGRAM_PROFILES.map((profile, index) => <button key={profile.handle} aria-label={`Show ${profile.name}`} onClick={() => setActive(index)} className={`h-1.5 rounded-full transition-all ${active === index ? 'w-6 bg-white' : 'w-1.5 bg-white/35 hover:bg-white/70'}`} />)}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
