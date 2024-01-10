import Cta from "@/components/cta";
import Faqs from "@/components/faqs";
import FeaturesTable from "@/components/features-table";
import PricingTables from "@/components/pricing-tables";
import TestimonialsCarousel from "@/components/testimonials-carousel";

export const metadata = {
  title: "Pricing - Simple",
  description: "Page description",
};

export default function Pricing() {
  return (
    <>
      <PricingTables />
      <FeaturesTable />
      <TestimonialsCarousel />
      <Faqs />
      <Cta />
    </>
  );
}
