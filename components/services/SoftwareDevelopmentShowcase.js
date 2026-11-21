'use client';

const phases = [
  ['01', 'Requirement Discovery', 'Goals, users & scope'],
  ['02', 'System Analysis', 'Feasibility & architecture'],
  ['03', 'UX / UI Design', 'Flows & visual direction'],
  ['04', 'Engineering', 'Secure, scalable builds'],
  ['05', 'QA & Launch', 'Testing, release & support'],
];

export default function SoftwareDevelopmentShowcase() {
  return (
    <section className="w-full">
      <div className="mb-7">
        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-textHeading font-headingfont">
          Built to Evolve, Engineered to Last
        </h2>
        <p className="mt-2 max-w-2xl text-sm sm:text-base text-textDescription font-bodyfont">
          Every product moves through a disciplined delivery loop—from a clear brief to a stable, continuously improved release.
        </p>
      </div>

      <div className="sdlc-board relative overflow-hidden rounded-2xl border border-border bg-[#0d0b14] p-5 sm:p-8 shadow-[0_18px_60px_rgba(0,0,0,.28)]">
        <div className="sdlc-grid absolute inset-0 opacity-30" />
        <div className="sdlc-orb absolute -top-20 right-1/4 h-52 w-52 rounded-full bg-[#8356fb]/25 blur-3xl" />
        <div className="sdlc-orb sdlc-orb-alt absolute -bottom-24 left-1/4 h-60 w-60 rounded-full bg-[#1f8ed4]/15 blur-3xl" />

        <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center">
          <div className="sdlc-loop relative flex h-[220px] w-[220px] items-center justify-center sm:h-[290px] sm:w-[290px]">
            <svg viewBox="0 0 320 320" className="absolute inset-0 h-full w-full -rotate-90" aria-label="Animated software development lifecycle" role="img">
              <defs>
                <linearGradient id="sdlc-gradient" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#38bdf8" />
                  <stop offset="52%" stopColor="#8356fb" />
                  <stop offset="100%" stopColor="#c4b5fd" />
                </linearGradient>
              </defs>
              <circle cx="160" cy="160" r="124" fill="none" stroke="rgba(255,255,255,.08)" strokeWidth="25" />
              <circle className="sdlc-ring" cx="160" cy="160" r="124" fill="none" stroke="url(#sdlc-gradient)" strokeLinecap="round" strokeWidth="25" />
              <path className="sdlc-arrow" d="M160 17 l22 32 h-44z" fill="#38bdf8" />
            </svg>
            <div className="sdlc-core relative flex h-[140px] w-[140px] flex-col items-center justify-center rounded-full border border-white/10 bg-[#171322]/95 text-center shadow-[0_0_35px_rgba(131,86,251,.22)] sm:h-[178px] sm:w-[178px]">
              <span className="text-[10px] font-bold uppercase tracking-[.2em] text-[#a789ff]">Delivery loop</span>
              <strong className="mt-1 text-lg font-bold text-white sm:text-2xl font-headingfont">Ship. Learn.<br />Improve.</strong>
              <span className="mt-2 h-1 w-10 rounded-full bg-[#8356fb]" />
            </div>
          </div>

          <div className="relative mt-4 h-12 w-full max-w-4xl overflow-hidden sm:h-16">
            <div className="sdlc-flow-line absolute left-2 right-2 top-1/2 h-[3px] -translate-y-1/2 rounded-full bg-gradient-to-r from-[#38bdf8] via-[#8356fb] to-[#38bdf8]" />
            <div className="sdlc-flow-pulse absolute top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-white shadow-[0_0_17px_5px_rgba(131,86,251,.9)]" />
          </div>

          <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-5 sm:gap-4">
            {phases.map(([number, title, description], index) => (
              <article key={number} className="sdlc-phase relative rounded-xl border border-white/10 bg-[#171322]/90 p-4 backdrop-blur-xl" style={{ animationDelay: `${index * 120}ms` }}>
                <span className="absolute -top-3 left-4 flex h-6 w-6 items-center justify-center rounded-full border border-[#b9a4ff]/50 bg-[#8356fb] text-[10px] font-black text-white shadow-[0_0_15px_rgba(131,86,251,.75)]">{number}</span>
                <h3 className="mt-2 text-sm font-bold text-white font-headingfont">{title}</h3>
                <p className="mt-1 text-[11px] leading-relaxed text-[#afa8bf] font-bodyfont">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .sdlc-board { isolation: isolate; }
        .sdlc-grid { background-image: linear-gradient(rgba(131,86,251,.11) 1px, transparent 1px), linear-gradient(90deg, rgba(131,86,251,.11) 1px, transparent 1px); background-size: 32px 32px; mask-image: linear-gradient(to bottom, black, transparent); }
        .sdlc-orb { animation: sdlc-orb 8s ease-in-out infinite alternate; }
        .sdlc-orb-alt { animation-delay: -3s; }
        .sdlc-ring { stroke-dasharray: 780; stroke-dashoffset: 780; animation: sdlc-draw 2.4s ease-out forwards, sdlc-glow 2.8s ease-in-out 2.4s infinite; filter: drop-shadow(0 0 8px rgba(131,86,251,.7)); }
        .sdlc-arrow { transform-origin: 160px 160px; animation: sdlc-rotate 12s linear infinite; filter: drop-shadow(0 0 5px #38bdf8); }
        .sdlc-flow-pulse { animation: sdlc-flow 3.2s ease-in-out infinite; }
        .sdlc-phase { animation: sdlc-rise .6s both ease-out; transition: transform .25s ease, border-color .25s ease, background .25s ease; }
        .sdlc-phase:hover { transform: translateY(-6px); border-color: rgba(131,86,251,.7); background: rgba(131,86,251,.13); }
        @keyframes sdlc-draw { to { stroke-dashoffset: 0; } }
        @keyframes sdlc-rotate { to { transform: rotate(360deg); } }
        @keyframes sdlc-flow { 0% { left: 2%; opacity: 0; } 12% { opacity: 1; } 88% { opacity: 1; } 100% { left: 98%; opacity: 0; } }
        @keyframes sdlc-rise { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes sdlc-glow { 50% { opacity: .72; } }
        @keyframes sdlc-orb { to { transform: translate(28px, 32px) scale(1.15); } }
        .sdlc-board { background: rgb(var(--card-bg)) !important; border-color: rgb(var(--border)) !important; box-shadow: var(--box-shadow), 0 18px 60px rgba(131,86,251,.1); }
        .sdlc-grid { opacity: .42; background-image: linear-gradient(rgba(131,86,251,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(131,86,251,.12) 1px, transparent 1px); }
        .sdlc-loop circle:not(.sdlc-ring) { stroke: rgb(var(--border)); }
        .sdlc-core { background: rgb(var(--card-bg)) !important; border-color: rgb(var(--border)) !important; box-shadow: 0 0 35px rgba(131,86,251,.22); }
        .sdlc-core strong { color: rgb(var(--text-heading)) !important; }
        .sdlc-flow-pulse { background: rgb(var(--text-heading)) !important; }
        .sdlc-phase { background: rgb(var(--background)) !important; border-color: rgb(var(--border)) !important; }
        .sdlc-phase h3 { color: rgb(var(--text-heading)) !important; }
        .sdlc-phase p { color: rgb(var(--text-description)) !important; }
        .sdlc-phase:hover { background: rgba(131,86,251,.1) !important; }
        .light .sdlc-orb { opacity: .6; }
        .light .sdlc-board { box-shadow: 0 16px 42px rgba(36, 25, 71, .12); }
        .light .sdlc-ring { filter: drop-shadow(0 0 6px rgba(131,86,251,.45)); }
        .light .sdlc-flow-pulse { box-shadow: 0 0 17px 5px rgba(131,86,251,.55); }
        .light .sdlc-arrow { filter: drop-shadow(0 0 4px rgba(56,189,248,.55)); }
      `}</style>
    </section>
  );
}
