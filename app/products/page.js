'use client';
import Link from 'next/link';
import SubpageFAQ from '@/components/SubpageFAQ';

const productsList = [
  {
    id: 'rentlyf',
    title: 'Rentlyf',
    badge: 'PropTech SaaS',
    image: '/images/rentlyf.png',
    description: 'A mobile-first SaaS platform built for professional landlords and property managers to automate rent collection, tenant screening, lease agreements, and maintenance requests from one centralized dashboard.',
    features: [
      'Automated Rent Collection',
      'Digital Lease Agreements',
      'Maintenance Dispatch Tracker',
      'Tenant KYC & Screening',
      'Multi-Property Dashboard'
    ],
    liveUrl: 'https://www.rentlyf.app',
    buttonText: 'Open Rentlyf',
    isExternal: true
  },
  {
    id: 'grocery-platform',
    title: 'Grocery & Supermarket Platform',
    badge: 'Turnkey Commerce & Quick-Delivery',
    image: '/images/grocery.png',
    description: 'An end-to-end multi-store digital commerce solution empowering local grocery chains, supermarkets, and dark stores to manage catalog inventory, POS billing, delivery routes, and customer loyalty.',
    features: [
      'Real-Time Inventory Sync',
      'Integrated POS & Online Orders',
      'Delivery Route Optimization',
      'Automated WhatsApp Updates',
      'Multi-Branch Architecture'
    ],
    liveUrl: '/projects/buyzaar',
    buttonText: 'View Case Study',
    isExternal: false
  },
];

const productsFaqs = [
  {
    q: 'Can Zentrix Infotech products be customized for our specific business workflow?',
    a: 'Yes, all our proprietary software products can be white-labeled, customized, or extended to match your exact business requirements, branding, and workflows.'
  },
  {
    q: 'How do licensing and pricing work for your software products?',
    a: 'We offer flexible licensing models including monthly/annual SaaS subscriptions, one-time purchase with source code access, and custom enterprise deployments with dedicated hosting and SLA support.'
  },
  {
    q: 'Can I request a live demo or free trial before purchasing?',
    a: 'Absolutely! We provide 1-on-1 walkthrough demos and sandbox trial environments so your team can test every feature and workflow before making any commitment.'
  },
  {
    q: 'What integrations do your products support?',
    a: 'Our platforms expose REST APIs and webhooks, and we integrate with the major payment gateways (Razorpay, Stripe, Cashfree), SMS/WhatsApp providers, logistics aggregators, and accounting software.'
  },
  {
    q: 'How is our data protected?',
    a: 'Data is encrypted in transit and at rest, access is controlled per role so staff only see what they need, and automated daily backups mean you can roll back to any point in the past 30 days.'
  },
  {
    q: 'What support do we get after launch?',
    a: 'Support comes directly from the people who built the platform, with response times under two hours for critical bugs and continuous feature upgrades included in active subscription tiers.'
  }
];

export default function ProductsPage() {
  return (
    <div className="flex flex-col items-center w-full font-headingfont bg-background text-textHeading relative transition-all duration-200">
      {/* Background Layer 1 matching Home */}
      <div
        className="absolute -top-[88px] w-full h-[520px] z-0 xxxs:h-[320px] sm:h-[480px] lg:h-[480px] xl:h-[540px] pointer-events-none overflow-hidden"
      >
        <img
          src="/HeroBG1.svg"
          alt=""
          role="presentation"
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* Left and Right Corner Graphics */}
      <img
        alt=""
        role="presentation"
        className="corner-art hero-bg-img-1 absolute -top-[88px] left-0 z-0 pointer-events-none h-auto w-[140px] xxs:w-[160px] xs:w-[190px] sm:w-[240px] md:w-[300px] lg:w-[360px] xl:w-[400px] min-[1440px]:w-[480px] 2xl:w-[540px]"
        style={{ '--corner-from-x': '-40px' }}
        src="/HeroLeftCornerBG.svg"
      />
      <img
        alt=""
        role="presentation"
        className="corner-art hero-bg-img-2 absolute -top-[88px] right-0 z-0 pointer-events-none h-auto w-[140px] xxs:w-[160px] xs:w-[190px] sm:w-[240px] md:w-[300px] lg:w-[360px] xl:w-[400px] min-[1440px]:w-[480px] 2xl:w-[540px]"
        style={{ '--corner-from-x': '40px' }}
        src="/HeroRightCornerBG.svg"
      />

      <div className="w-full relative z-10 flex flex-col items-center">
        {/* Header Hero Section */}
        <div className="w-full flex flex-col items-center mt-36 mb-16 xxxs:mt-20 xxxs:mb-8 xxs:mt-24 xxs:mb-10 sm:mt-28 sm:mb-12 lg:mt-32 xl:mt-36 xl:mb-16 2xl:mt-40 z-10">
          <div className="w-10/12 max-w-[860px] flex flex-col items-start text-left sm:items-center sm:text-center gap-3.5 sm:gap-4 xxxs:w-11/12 xxxs:gap-2.5">
            <div className="reveal-up" style={{ '--reveal-delay': '0s', '--reveal-y': '25px', '--reveal-duration': '0.65s' }}>
              <div className="badge-glow self-start sm:self-auto flex flex-row justify-center gap-1.5 items-center py-1.5 px-3.5 sm:py-2 sm:px-4 bg-badgeBG rounded-full text-badgeText border border-badgeBorder text-xs sm:text-sm lg:text-[12px] xl:text-sm 2xl:text-[16px] 2xl:px-6 2xl:py-4">
                <div className="flex justify-center items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-boxes w-3.5 h-3.5 sm:w-3 sm:h-3 2xl:w-4 2xl:h-4 text-badgeText flex-shrink-0" aria-hidden="true">
                    <path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"></path>
                    <path d="m7 16.5-4.74-2.85"></path>
                    <path d="m7 16.5 5-3"></path>
                    <path d="M7 16.5v5.17"></path>
                    <path d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"></path>
                    <path d="m17 16.5-5-3"></path>
                    <path d="m17 16.5 4.74-2.85"></path>
                    <path d="M17 16.5v5.17"></path>
                    <path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"></path>
                    <path d="M12 8 7.26 5.15"></path>
                    <path d="m12 8 4.74-2.85"></path>
                    <path d="M12 13.5V8"></path>
                  </svg>
                </div>
                <p>BUILT BY US</p>
              </div>
            </div>

            <div className="reveal-up" style={{ '--reveal-delay': '0.08s', '--reveal-y': '25px', '--reveal-duration': '0.65s' }}>
              <h1 className="text-3xl xxs:text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight text-left sm:text-center">
                Here’s What We’ve Been{' '}
                <span className="bg-headingGradient text-transparent bg-clip-text font-semibold inline-block ml-1.5 sm:ml-2">
                  Building
                </span>
              </h1>
            </div>

            <div className="reveal-up" style={{ '--reveal-delay': '0.23s', '--reveal-y': '25px', '--reveal-duration': '0.65s' }}>
              <p className="font-bodyfont text-textDescription text-sm sm:text-lg lg:text-xl text-left sm:text-center max-w-[640px]">
                We engineer scalable, enterprise-grade digital software products around real business challenges and transform them into effortless user experiences.
              </p>
            </div>
          </div>
        </div>

        {/* Product Cards Grid */}
        <section aria-label="Our Products" className="w-full flex flex-col items-center z-10 mb-28 xxxs:mb-16 sm:mb-20 lg:mb-24 xl:mb-28">
          <div className="w-10/12 grid grid-cols-1 lg:grid-cols-2 gap-6 xxxs:w-11/12 xs:w-10/12 sm:w-11/12 md:w-10/12 xl:gap-8 xl:max-w-[1300px] 2xl:max-w-[1440px]">
            {productsList.map((product) => (
              <div key={product.id} className="h-full">
                <div className="border border-border bg-cardBg group relative h-full rounded-2xl sm:rounded-3xl p-3 sm:p-5 flex flex-col justify-between overflow-hidden gap-4 shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-none hover:border-[#8356FB]/60 transition-all duration-300">
                  {/* Product Cover Image Container */}
                  <div className="relative w-full aspect-[16/10] rounded-xl sm:rounded-2xl overflow-hidden flex items-center justify-center bg-black/10 dark:bg-black/30 border border-border/40">
                    <img
                      alt={product.title}
                      loading="lazy"
                      src={product.image}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 px-3 py-1 rounded-md sm:rounded-lg bg-white/95 dark:bg-[#111]/95 text-[#8356FB] text-[10px] sm:text-xs font-extrabold tracking-wide shadow-md z-10 flex items-center gap-1.5 border border-[#8356FB]/20 backdrop-blur-md">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8356FB]"></span>
                      <span>{product.badge}</span>
                    </div>
                  </div>

                  {/* Content Block */}
                  <div className="flex flex-col justify-between gap-4 flex-1">
                    <div className="flex flex-col gap-2">
                      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold font-headingfont text-textHeading">
                        {product.title}
                      </h2>
                      <p className="font-bodyfont text-textDescription text-xs sm:text-sm lg:text-base leading-relaxed">
                        {product.description}
                      </p>

                      {/* Feature Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {product.features.map((feature, fIdx) => (
                          <span
                            key={fIdx}
                            className="font-bodyfont text-[11px] sm:text-xs px-2.5 py-0.5 rounded-md border border-border bg-cardBg/80 text-textDescription"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="w-full pt-3 mt-auto">
                      {product.isExternal ? (
                        <a
                          href={product.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/btn w-full block"
                          aria-label={`Open ${product.title} in a new tab`}
                        >
                          <div className="h-11 sm:h-12 w-full flex items-center justify-between px-4 sm:px-5 rounded-xl bg-serviceBtnBg border border-border hover:border-[#8356FB] hover:bg-[#8356FB] text-textHeading hover:text-white transition-all duration-200">
                            <span className="font-semibold text-xs sm:text-sm lg:text-base">
                              {product.buttonText}
                            </span>
                            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-navTextHover flex items-center justify-center text-white group-hover/btn:bg-white group-hover/btn:text-navTextHover transition-all duration-200 flex-shrink-0">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link w-3.5 h-3.5 sm:w-4 sm:h-4" aria-hidden="true">
                                <path d="M15 3h6v6"></path>
                                <path d="M10 14 21 3"></path>
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                              </svg>
                            </div>
                          </div>
                        </a>
                      ) : (
                        <Link
                          href={product.liveUrl}
                          className="group/btn w-full block"
                          aria-label={`View ${product.title}`}
                        >
                          <div className="h-11 sm:h-12 w-full flex items-center justify-between px-4 sm:px-5 rounded-xl bg-serviceBtnBg border border-border hover:border-[#8356FB] hover:bg-[#8356FB] text-textHeading hover:text-white transition-all duration-200">
                            <span className="font-semibold text-xs sm:text-sm lg:text-base">
                              {product.buttonText}
                            </span>
                            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-navTextHover flex items-center justify-center text-white group-hover/btn:bg-white group-hover/btn:text-navTextHover transition-all duration-200 flex-shrink-0">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-3.5 h-3.5 sm:w-4 sm:h-4 -rotate-45" aria-hidden="true">
                                <path d="M5 12h14"></path>
                                <path d="m12 5 7 7-7 7"></path>
                              </svg>
                            </div>
                          </div>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Interactive FAQ Section */}
        <SubpageFAQ
          badgeText="Products FAQ"
          headingWord1="Frequently Asked"
          headingWord2="Questions"
          description="Everything you need to know about our pre-built platforms, licensing models, customization options, and enterprise support."
          faqs={productsFaqs}
        />
      </div>
    </div>
  );
}
