import { Button } from '@/components/ui/button';
import Image from 'next/image';

export const JobPostingSection = () => {
  return (
    <div className="px-4 flex flex-col gap-4 mt-8 bg-brand-text-color py-24 relative overflow-hidden md:flex-row md:pb-0 md:pt-10 md:mx-32 ">
      <div className="flex flex-col justify-center items-center gap-4 md:w-1/2">
        <h1 className=" text-center text-5xl font-bold text-white md:text-start md:w-3/4">
          Start posting jobs today
        </h1>
        <p className="text-center text-white md:text-start">start posting jobs for only $10</p>
        <Button className="rounded-none bg-white text-brand-text-color w-1/2">
          Sign Up for free
        </Button>
      </div>

      <Image
        src={'/app-images/job-posting-folder/Dashboard Company.png'}
        alt="job-posting-image"
        width="2400"
        height="2400"
        className="w-screen max-w-none md:w-1/2 z-20"
      />
      <Image
        src={'/app-images/hero-section/hero-image-reactangle.png'}
        alt="hero-image-overlay"
        width={800}
        height={800}
        className="absolute top-50 left-27.5 h-full w-full object-cover rotate-358 md:hidden"
      />
      <Image
        src={'/app-images/hero-section/hero-image-reactangle.png'}
        alt="hero-image-overlay"
        width={800}
        height={800}
        className="hidden absolute bottom-0 right-[-520] object-cover h-1/2 rotate-320 md:block z-10 bg-white"
      />
      <Image
        src={'/app-images/hero-section/hero-image-reactangle.png'}
        alt="hero-image-overlay"
        width={800}
        height={800}
        className="hidden absolute top-[-20] left-[-280] object-cover h-1/2 rotate-170 md:block z-10"
      />
      <Image
        src={'/app-images/hero-section/hero-image-reactangle.png'}
        alt="hero-image-overlay"
        width={800}
        height={800}
        className="absolute top-[-570] left-[-300] h-full w-full object-cover rotate-690 md:hidden"
      />
    </div>
  );
};
