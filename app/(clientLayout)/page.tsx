import { Advertisement } from '@/components/client-components/layout/Advertisement';
import { HeroSection } from '@/components/client-components/layout/HeroSection';
import { CategorySection } from '@/components/client-components/sections/category-section/category-section';
import { FeaturedJob } from '@/components/client-components/sections/featured-job/featured-job';
import { JobPostingSection } from '@/components/client-components/sections/job-posting-section/job-posting-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <Advertisement />
      <CategorySection />
      <JobPostingSection />
      <FeaturedJob />
    </>
  );
}
