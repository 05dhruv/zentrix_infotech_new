'use client';

const metrics = [
  ['Ad Spend', '₹64.0L', '193.42%'], ['Impressions', '21.35M', '121.16%'], ['eCPM', '₹298', '32.68%'],
  ['CTR', '0.04%', '39.03%'], ['Avg. View Rate', '49.32%', '16.59%'], ['Accounts Engaged', '17.0K', '82.56%'],
];

export default function AdsManagementShowcase() {
  return (
    <section className="w-full">
      <div className="mb-7"><h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-textHeading font-headingfont">Performance That Moves the Needle</h2></div>
      <div className="ads-performance-board relative overflow-hidden rounded-2xl border border-border bg-[#0d0b14] p-4 sm:p-6 lg:p-8 shadow-[0_18px_60px_rgba(0,0,0,.28)]">
        <div className="ads-orb absolute -top-28 -left-20 h-64 w-64 rounded-full bg-[#8356fb]/25 blur-3xl" />
        <div className="ads-orb ads-orb-alt absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-[#348dc9]/18 blur-3xl" />
        <div className="ads-grid absolute inset-0 opacity-30" />
        <div className="relative z-10 grid gap-4 lg:grid-cols-12 lg:gap-6">
          <div className="ads-trend-card rounded-xl border border-white/10 bg-[#171322]/90 p-4 sm:p-6 text-[#f7f4ff] shadow-[0_24px_60px_rgba(0,0,0,.35)] backdrop-blur-xl lg:col-span-7">
            <div className="mb-5 flex flex-col gap-3 border-b border-white/10 pb-4 xs:flex-row xs:items-start xs:justify-between"><div><h3 className="text-lg sm:text-xl font-extrabold tracking-tight">Performance Trend</h3><p className="text-[11px] sm:text-xs text-[#aaa3bd]">₹64L Spend&nbsp; | &nbsp;21.35M Impressions</p></div><div className="flex gap-3 text-[10px] sm:text-xs font-semibold whitespace-nowrap"><span><i className="mr-1 inline-block h-2 w-2 rounded-full bg-[#ede9fe]" />Impressions</span><span><i className="mr-1 inline-block h-2 w-2 rounded-full bg-[#8356fb]" />Spend</span></div></div>
            <div className="relative h-44 sm:h-52 overflow-hidden"><div className="absolute inset-0 grid grid-rows-4">{[0, 1, 2, 3].map((line) => <span key={line} className="border-b border-white/10" />)}</div><svg viewBox="0 0 600 200" className="relative h-full w-full overflow-visible" aria-label="Animated campaign performance chart" role="img"><path className="ads-chart-line ads-chart-line-dark" pathLength="1" d="M0 80 C35 75 55 48 78 64 S120 120 152 101 S180 35 210 46 S250 72 274 68 S302 96 329 88 S370 65 402 56 S438 49 470 30 S515 25 600 34" fill="none" /><path className="ads-chart-line ads-chart-line-blue" pathLength="1" d="M0 134 C30 115 51 94 78 104 S118 135 150 120 S181 91 208 95 S241 133 270 144 S314 139 340 121 S388 84 424 95 S462 126 493 124 S543 103 600 88" fill="none" /><circle className="ads-chart-dot" cx="210" cy="46" r="5" /></svg><div className="absolute bottom-0 left-0 right-0 flex justify-between text-[10px] text-[#aaa3bd]"><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span></div></div>
          </div>
          <div className="rounded-xl border border-white/10 bg-[#171322]/95 p-4 sm:p-5 text-[#f7f4ff] shadow-[0_22px_55px_rgba(0,0,0,.38)] backdrop-blur-xl lg:col-span-5"><h3 className="mb-3 text-base sm:text-lg font-extrabold">Highlights</h3><div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-2.5">{metrics.map(([label, value, growth]) => <div key={label} className="ads-metric-card min-w-0 rounded-md border border-white/10 bg-white/[.035] p-2.5 sm:p-3"><p className="truncate text-[9px] sm:text-[10px] text-[#aaa3bd]">{label}</p><p className="ads-number mt-0.5 text-base sm:text-lg font-extrabold tracking-tight">{value}</p><p className="text-[9px] sm:text-[10px] font-bold text-[#a789ff]">↑ {growth}</p></div>)}</div></div>
          <div className="rounded-xl border border-white/10 bg-[#171322]/95 p-4 sm:p-5 text-[#f7f4ff] shadow-[0_22px_55px_rgba(0,0,0,.38)] backdrop-blur-xl lg:col-span-12"><h3 className="text-xs font-extrabold">Distribution by Campaign Types</h3><div className="mt-3 flex items-center gap-4"><div className="ads-donut shrink-0" /><div className="space-y-1.5 text-[10px] text-[#b9b2ca]"><p><b className="text-[#8356fb]">●</b> Advertising <strong className="ml-1 text-[#f7f4ff]">19,475</strong></p><p><b className="text-[#4ba8e6]">●</b> Retargeting <strong className="ml-1 text-[#f7f4ff]">356,170</strong></p><p><b className="text-[#69c69b]">●</b> External Media <strong className="ml-1 text-[#f7f4ff]">528,191</strong></p></div></div></div>
        </div>
      </div>
      <style jsx>{`
        .ads-performance-board { isolation: isolate; } .ads-grid { background-image: linear-gradient(rgba(131,86,251,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(131,86,251,.12) 1px, transparent 1px); background-size: 32px 32px; mask-image: linear-gradient(to bottom, black, transparent); } .ads-orb { animation: ads-orb 9s ease-in-out infinite alternate; } .ads-orb-alt { animation-delay: -4s; } .ads-chart-line { stroke-width: 3; stroke-linecap: round; stroke-linejoin: round; stroke-dasharray: 1; stroke-dashoffset: 1; animation: ads-draw 2.8s ease-out forwards; } .ads-chart-line-dark { stroke: #ede9fe; filter: drop-shadow(0 0 5px rgba(237,233,254,.25)); } .ads-chart-line-blue { stroke: #8356fb; filter: drop-shadow(0 0 6px rgba(131,86,251,.65)); animation-delay: .35s; } .ads-chart-dot { fill: #8356fb; filter: drop-shadow(0 0 7px #8356fb); animation: ads-pulse 1.8s ease-in-out infinite; transform-origin: 210px 46px; } .ads-donut { width: 86px; height: 86px; border-radius: 9999px; background: conic-gradient(#8356fb 0 56%, #4ba8e6 56% 80%, #69c69b 80% 100%); position: relative; animation: ads-spin 14s linear infinite; box-shadow: 0 0 28px rgba(131,86,251,.22); } .ads-donut::after { content: ''; position: absolute; inset: 23px; border-radius: 9999px; background: #171322; } .ads-number { animation: ads-number-glow 2.2s ease-in-out infinite; } .ads-metric-card { animation: ads-metric-breathe 3s ease-in-out infinite; } .ads-metric-card:nth-child(2n) { animation-delay: .4s; } @keyframes ads-draw { to { stroke-dashoffset: 0; } } @keyframes ads-pulse { 50% { opacity: .35; transform: scale(1.65); } } @keyframes ads-spin { to { transform: rotate(360deg); } } @keyframes ads-number-glow { 50% { color: #bda9ff; } } @keyframes ads-metric-breathe { 50% { background: rgba(131,86,251,.12); border-color: rgba(131,86,251,.4); } } @keyframes ads-orb { to { transform: translate(48px, 28px) scale(1.18); } } @media (max-width: 639px) { .ads-donut { width: 72px; height: 72px; } .ads-donut::after { inset: 19px; } } @media (prefers-reduced-motion: reduce) { .ads-orb, .ads-chart-line, .ads-chart-dot, .ads-donut, .ads-number, .ads-metric-card { animation: none; } }
        .ads-performance-board { background: rgb(var(--background)) !important; border-color: rgb(var(--border)) !important; }
        .ads-trend-card, .ads-trend-card + div, .ads-trend-card + div + div { background: rgb(var(--card-bg)) !important; border-color: rgb(var(--border)) !important; color: rgb(var(--text-heading)) !important; }
        .ads-trend-card h3, .ads-trend-card + div h3, .ads-trend-card + div + div h3, .ads-trend-card strong, .ads-trend-card + div strong, .ads-trend-card + div + div strong { color: rgb(var(--text-heading)) !important; }
        .ads-trend-card p, .ads-trend-card + div p, .ads-trend-card + div + div p { color: rgb(var(--text-description)) !important; }
        .ads-trend-card + div .ads-metric-card { background: rgb(var(--background)) !important; border-color: rgb(var(--border)) !important; }
        .ads-trend-card + div .ads-number { color: rgb(var(--text-heading)) !important; }
        .ads-trend-card + div .ads-metric-card p:last-child { color: #8356fb !important; }
        .ads-trend-card .ads-chart-line-dark { stroke: rgb(var(--text-heading)); filter: drop-shadow(0 0 5px rgba(131,86,251,.18)); }
        .ads-trend-card .ads-chart-line-blue { stroke: #8356fb; filter: drop-shadow(0 0 6px rgba(131,86,251,.55)); }
        .ads-trend-card .ads-chart-dot { fill: #8356fb; filter: drop-shadow(0 0 7px #8356fb); }
        .ads-trend-card .border-white\\/10 { border-color: rgb(var(--border)) !important; }
        .ads-trend-card + div + div .ads-donut::after { background: rgb(var(--card-bg)); }
        .ads-trend-card + div + div .ads-donut { background: conic-gradient(#8356fb 0 56%, #4ba8e6 56% 80%, #69c69b 80% 100%); }
        .ads-trend-card h3 { font-size: clamp(1.35rem, 1.7vw, 1.65rem); line-height: 1.1; }
        .ads-trend-card h3 + p { margin-top: .3rem; font-size: clamp(.8rem, 1vw, .95rem); }
        .ads-trend-card > div:first-child > div:last-child { font-size: clamp(.75rem, .9vw, .9rem); }
        .ads-trend-card + div h3 { font-size: clamp(1.25rem, 1.55vw, 1.5rem); line-height: 1.1; }
        .ads-trend-card + div .ads-metric-card { padding: .8rem; }
        .ads-trend-card + div .ads-metric-card p:first-child { font-size: clamp(.72rem, .8vw, .82rem); }
        .ads-trend-card + div .ads-number { margin-top: .35rem; font-size: clamp(1.2rem, 1.4vw, 1.55rem); line-height: 1; }
        .ads-trend-card + div .ads-metric-card p:last-child { margin-top: .4rem; font-size: clamp(.7rem, .75vw, .8rem); }
        .ads-trend-card + div + div h3 { font-size: clamp(.95rem, 1vw, 1.1rem); }
        .ads-trend-card + div + div p { font-size: clamp(.75rem, .85vw, .9rem); }
        @media (min-width: 1024px) {
          .ads-performance-board { min-height: 480px; overflow: visible; padding: 0; border-color: transparent !important; box-shadow: none; }
          .ads-performance-board > .relative { display: block; min-height: 480px; }
          .ads-trend-card, .ads-trend-card + div, .ads-trend-card + div + div { box-shadow: 0 18px 40px rgba(0,0,0,.18); }
          .ads-trend-card { position: absolute; z-index: 1; top: 0; left: 0; width: 64%; padding: 1.75rem; }
          .ads-trend-card > div:last-child { height: 230px; }
          .ads-trend-card + div { position: absolute; z-index: 3; top: 114px; right: 0; width: 52%; padding: 1.5rem; }
          .ads-trend-card + div + div { position: absolute; z-index: 2; bottom: 0; left: 7%; width: 55%; padding: 1.25rem 1.5rem; }
        }
        @keyframes ads-float { 50% { transform: translateY(-7px); } }
      `}</style>
    </section>
  );
}
