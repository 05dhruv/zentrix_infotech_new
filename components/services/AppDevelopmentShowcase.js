'use client';

const steps = [
  { id: '01', title: 'Ideation & Research', icon: '✦', x: '16%', y: '26%' },
  { id: '02', title: 'Strategy & Planning', icon: '✓', x: '50%', y: '26%' },
  { id: '03', title: 'UX / UI Design', icon: '✎', x: '84%', y: '26%' },
  { id: '04', title: 'Development', icon: '‹›', x: '84%', y: '73%' },
  { id: '05', title: 'QA & Testing', icon: '✓', x: '50%', y: '73%' },
  { id: '06', title: 'Launch & Iterate', icon: '↗', x: '16%', y: '73%' },
];

export default function AppDevelopmentShowcase() {
  return (
    <section className="w-full">
      <div className="mb-7">
        <span className="text-xs uppercase tracking-wider font-bold text-navTextHover font-headingfont">Product delivery, made visible</span>
        <h2 className="mt-1 text-2xl sm:text-4xl font-bold tracking-tight text-textHeading font-headingfont">Mobile App Development Process</h2>
      </div>

      <div className="app-process rounded-2xl border border-border p-4 sm:p-7">
        <div className="app-diagram relative hidden aspect-[2/1] min-h-[420px] overflow-hidden rounded-xl md:block">
          <div className="app-diagram-grid absolute inset-0" />
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1000 500" fill="none" aria-label="App development process flow" role="img">
            <defs>
              <linearGradient id="pathTop" x1="0" x2="1"><stop stopColor="#8b5cf6" /><stop offset="1" stopColor="#42c8f4" /></linearGradient>
              <linearGradient id="pathBottom" x1="0" x2="1"><stop stopColor="#f8c94b" /><stop offset="1" stopColor="#a78bfa" /></linearGradient>
              <filter id="glow"><feGaussianBlur stdDeviation="4" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
            </defs>
            <path className="app-path-track" d="M160 130 H840 Q910 130 910 200 V300 Q910 370 840 370 H160 Q90 370 90 300 V200 Q90 130 160 130" stroke="rgba(255,255,255,.1)" strokeWidth="7" />
            <path className="app-path app-path-top" d="M160 130 H840 Q910 130 910 200 V250" stroke="url(#pathTop)" strokeWidth="7" strokeLinecap="round" filter="url(#glow)" />
            <path className="app-path app-path-bottom" d="M910 250 V300 Q910 370 840 370 H160 Q90 370 90 300 V250" stroke="url(#pathBottom)" strokeWidth="7" strokeLinecap="round" filter="url(#glow)" />
            <circle r="8" fill="#fff" filter="url(#glow)"><animateMotion dur="5s" repeatCount="indefinite" path="M160 130 H840 Q910 130 910 200 V300 Q910 370 840 370 H160 Q90 370 90 300 V200 Q90 130 160 130" /></circle>
          </svg>
          {steps.map((step, index) => <div key={step.id} className="app-step" style={{ left: step.x, top: step.y, animationDelay: `${index * 110}ms` }}>
            <div className={`app-step-icon ${index > 2 ? 'app-step-icon-warm' : ''}`}><span>{step.icon}</span><b>{step.id}</b></div><p>{step.title}</p>
          </div>)}
          <div className="app-feedback"><span>↻</span><b>Continuous feedback</b><small>Every release makes the next one better</small></div>
        </div>

        <div className="grid gap-3 md:hidden">
          {steps.map((step, index) => <div key={step.id} className="app-mobile-step"><span className="app-mobile-number">{step.id}</span><span className="app-mobile-icon">{step.icon}</span><span><b>{step.title}</b><small>{index === 5 ? 'Measure, learn and improve' : 'A deliberate step toward launch'}</small></span></div>)}
        </div>
      </div>

      <style jsx>{`
        .app-process{background:radial-gradient(circle at 16% 10%,rgba(131,86,251,.2),transparent 30%),radial-gradient(circle at 90% 90%,rgba(46,188,236,.17),transparent 28%),#100e18;box-shadow:0 20px 60px rgba(0,0,0,.22)}.app-diagram{background:linear-gradient(115deg,#151128,#162c52 55%,#0b526b)}.app-diagram-grid{opacity:.32;background-image:linear-gradient(rgba(255,255,255,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.08) 1px,transparent 1px);background-size:32px 32px;mask-image:linear-gradient(110deg,transparent,black 20%,black 85%,transparent)}.app-path{stroke-dasharray:1100;stroke-dashoffset:1100;animation:app-draw 2s ease-out forwards}.app-path-bottom{animation-delay:.55s}.app-step{position:absolute;z-index:2;transform:translate(-50%,-50%);width:190px;text-align:center;opacity:0;animation:app-step-in .55s forwards ease-out}.app-step-icon{position:relative;display:grid;place-items:center;width:108px;height:108px;margin:auto;border:6px solid #c6f4ff;border-bottom-color:#42c8f4;border-radius:999px;background:radial-gradient(circle at 30% 25%,#6455a5,#1a244d 70%);box-shadow:0 0 28px rgba(66,200,244,.25);color:#fff;font:700 34px/1 Arial}.app-step-icon-warm{border-bottom-color:#f8c94b;box-shadow:0 0 28px rgba(248,201,75,.22)}.app-step-icon b{position:absolute;right:-4px;top:8px;display:grid;place-items:center;width:24px;height:24px;border-radius:50%;background:#fff;color:#17132a;font:900 10px/1 Arial}.app-step p{margin:11px 0 0;color:#fff;font:700 14px/1.25 Arial;text-shadow:0 2px 8px rgba(0,0,0,.3)}.app-feedback{position:absolute;left:5%;bottom:5%;z-index:3;display:flex;align-items:center;gap:7px;border:1px solid rgba(248,201,75,.55);background:rgba(248,201,75,.12);backdrop-filter:blur(8px);padding:8px 11px;border-radius:10px;color:#ffdc62}.app-feedback span{font-size:19px;animation:app-spin 4s linear infinite}.app-feedback b,.app-feedback small{display:block;font-family:Arial}.app-feedback b{font-size:11px}.app-feedback small{font-size:9px;color:#fff2bf}.app-mobile-step{display:flex;align-items:center;gap:12px;border:1px solid rgba(255,255,255,.1);border-radius:14px;padding:13px;background:rgba(255,255,255,.035);color:#fff}.app-mobile-number{font:800 11px Arial;color:#bda9ff}.app-mobile-icon{display:grid;place-items:center;width:36px;height:36px;border-radius:10px;background:rgba(131,86,251,.24);font-size:20px}.app-mobile-step b,.app-mobile-step small{display:block;font-family:Arial}.app-mobile-step b{font-size:13px}.app-mobile-step small{margin-top:3px;font-size:10px;color:#aaa3bd}@keyframes app-draw{to{stroke-dashoffset:0}}@keyframes app-step-in{to{opacity:1;transform:translate(-50%,-50%)}}@keyframes app-spin{to{transform:rotate(360deg)}}
        .app-process{background:radial-gradient(circle at 16% 10%,rgba(131,86,251,.18),transparent 30%),radial-gradient(circle at 90% 90%,rgba(46,188,236,.13),transparent 28%),rgb(var(--card-bg))!important;border-color:rgb(var(--border))!important;box-shadow:var(--box-shadow),0 20px 60px rgba(0,0,0,.16)}
        .app-path-track{stroke:rgb(var(--border))!important}.app-step p{color:rgb(var(--text-heading))!important;text-shadow:none}.app-mobile-step{background:rgb(var(--background))!important;border-color:rgb(var(--border))!important;color:rgb(var(--text-heading))!important}.app-mobile-step small{color:rgb(var(--text-description))!important}.app-feedback{color:#d8c8ff}.app-feedback small{color:rgb(var(--text-heading))!important}
        :global(.light) .app-process{background:radial-gradient(circle at 16% 10%,rgba(131,86,251,.12),transparent 32%),radial-gradient(circle at 90% 90%,rgba(46,188,236,.12),transparent 28%),rgb(var(--card-bg))!important;box-shadow:0 16px 42px rgba(35,25,70,.12)}
        :global(.light) .app-diagram{background:linear-gradient(115deg,#faf8ff,#eff7ff 55%,#e8f9fc)}
        :global(.light) .app-diagram-grid{opacity:.48;background-image:linear-gradient(rgba(91,65,159,.13) 1px,transparent 1px),linear-gradient(90deg,rgba(91,65,159,.13) 1px,transparent 1px)}
        :global(.light) .app-step-icon{border-color:#7658e9;border-bottom-color:#38bdf8;background:radial-gradient(circle at 30% 25%,#8c78da,#42367f 70%);box-shadow:0 0 24px rgba(81,62,174,.2)}
        :global(.light) .app-step-icon-warm{border-bottom-color:#d39a13;box-shadow:0 0 24px rgba(211,154,19,.2)}
        :global(.light) .app-feedback{border-color:rgba(186,133,9,.4);background:rgba(255,243,199,.8);color:#8a5b00}
        :global(.light) .app-feedback small{color:#5c470f!important}
      `}</style>
    </section>
  );
}
