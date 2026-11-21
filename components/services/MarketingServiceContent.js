const offerings = [
  ['Google Ads Management', 'Search, Display, Shopping & YouTube campaigns with advanced targeting and optimization.', ['Keyword Research', 'Ad Copy Creation', 'Bid Management', 'Conversion Tracking']],
  ['Meta Ads (Facebook & Instagram)', 'Social media advertising across Facebook and Instagram with creative strategy.', ['Audience Targeting', 'Creative Design', 'A/B Testing', 'Retargeting Campaigns']],
  ['LinkedIn Advertising', 'B2B lead generation and brand awareness campaigns for professional audiences.', ['Lead Gen Forms', 'Sponsored Content', 'Message Ads', 'Account Targeting']],
  ['Search Engine Optimization', 'Organic ranking improvement through technical SEO, content, and link building.', ['Keyword Optimization', 'Technical SEO', 'Content Strategy', 'Local SEO']],
  ['Google My Business', 'Local business optimization to increase visibility in local search results.', ['Profile Optimization', 'Review Management', 'Local Citations', 'GMB Posts']],
  ['Analytics & Reporting', 'Comprehensive tracking and reporting across all marketing channels.', ['Performance Tracking', 'ROI Analysis', 'Custom Dashboards', 'Monthly Reports']],
];

const reasons = [
  ['ROI Focused', 'Every campaign optimized for maximum return on investment'],
  ['Expert Team', 'Certified professionals with years of industry experience'],
  ['Full Transparency', 'Real-time reporting and complete campaign visibility'],
  ['Scalable Growth', 'Strategies that grow with your business needs'],
];

export default function MarketingServiceContent() {
  return <>
    <section id="what-we-provide" className="mt-14 scroll-mt-36">
      <span className="text-xs font-bold uppercase tracking-[.16em] text-navTextHover">Our Core Offerings</span>
      <h2 className="mt-2 font-headingfont text-3xl font-bold tracking-tight text-textHeading sm:text-4xl">What We Provide</h2>
      <p className="mt-2 text-base text-textDescription">Comprehensive digital marketing solutions to grow your business across all channels.</p>
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">{offerings.map(([title, description, list], index) => <article key={title} className="rounded-2xl border border-border bg-cardBg p-5 shadow-sm"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-navTextHover/15 text-lg font-bold text-navTextHover">{['⌕', 'f', 'in', '↗', '⌖', '⌁'][index]}</span><h3 className="mt-4 font-headingfont text-2xl font-bold text-textHeading">{title}</h3><p className="mt-2 min-h-14 text-sm leading-relaxed text-textDescription">{description}</p><ul className="mt-4 space-y-2 border-t border-border pt-4 text-sm font-semibold text-textHeading">{list.map((item) => <li key={item} className="flex items-center gap-2"><span className="flex h-5 w-5 items-center justify-center rounded-md bg-navTextHover/15 text-xs text-navTextHover">✓</span>{item}</li>)}</ul></article>)}</div>
    </section>
    <section id="why-zentrix" className="mt-14 rounded-2xl border border-navTextHover/30 bg-navTextHover/5 p-6 text-center scroll-mt-36 sm:p-9">
      <span className="text-xs font-bold uppercase tracking-[.16em] text-navTextHover">Why Zentrix</span>
      <h2 className="mt-2 font-headingfont text-3xl font-bold tracking-tight text-textHeading sm:text-4xl">Why Choose Our Digital Marketing Services?</h2>
      <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{reasons.map(([title, text], index) => <div key={title} className="rounded-xl border border-border bg-cardBg p-5"><span className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-navTextHover/15 text-lg text-navTextHover">{['◎', '♧', '◉', '↗'][index]}</span><h3 className="mt-3 font-headingfont text-xl font-bold text-textHeading">{title}</h3><p className="mt-2 text-sm leading-relaxed text-textDescription">{text}</p></div>)}</div>
    </section>
  </>;
}
