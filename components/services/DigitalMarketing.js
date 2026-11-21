'use client';
import ServiceDetailTemplate from './ServiceDetailTemplate';
import MarketingAnalyticsDashboard from './MarketingAnalyticsDashboard';
import MarketingServiceContent from './MarketingServiceContent';

export default function DigitalMarketing() {
  return <ServiceDetailTemplate serviceKey="digital-marketing" dashboard={<MarketingAnalyticsDashboard />} marketingContent={<MarketingServiceContent />} />;
}

