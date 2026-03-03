import { Button } from '@base-ui/react';
import { ChevronDownIcon, MapPinIcon, SearchIcon } from 'lucide-react';
import Image from 'next/image';
import { Navbar } from './Navbar';
import { ScribbleUnderline } from './sub-components/scribble-underline';

export function HeroSection() {
  return (
    <div className="font-roboto p-4 bg-[#F8F8FD] md:px-32">
      <Navbar />
      <div className="flex justify-between mt-8">
        <div className="md:w-1/2">
          <div className="flex flex-col gap-3 mt-8">
            <h1 className=" text-5xl font-bold">Discover</h1>
            <h1 className=" text-5xl font-bold">more than</h1>
            <div className="w-fit relative">
              <h1 className="text-secondary-text text-5xl font-bold">5000+ Jobs</h1>
              <ScribbleUnderline className="w-full" />
            </div>
          </div>
          <p className="text-black/60 mt-12">
            Great platform for the job seeker that searching for new career heights and passionate
            about startups.
          </p>
        </div>
        <div className="hidden md:block md:w-fit md:h-fit md:relative bg-red-200 md:overflow-hidden">
          {/* The "Anchor" Image - This determines the height of the div */}
          <Image
            src={'/app-images/hero-section/hero-person.png'}
            alt="person image"
            width={300}
            height={300}
            className="block"
          />

          {/* The "Overlay" Image - This floats on top and doesn't affect height */}
          <Image
            src={'/app-images/hero-section/hero-image-reactangle.png'}
            alt="hero-image-overlay"
            width={300}
            height={300}
            className="absolute top-20 left-27.5 h-full w-full object-cover rotate-340"
          />
        </div>
      </div>

      <div className="  md:w-[80%]">
        <div className=" items-stretch overflow-hidden rounded-xl border border-border  shadow-lg sm:flex mt-8 md:w-full  ">
          <div className="flex flex-1 items-center gap-2 px-4 py-3">
            <SearchIcon className="h-5 w-5 shrink-0 text-muted-foreground" />
            <input
              type="text"
              placeholder="Job title or keyword"
              className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none border-b p-3 border-border"
            />
          </div>
          <div className="w-px self-stretch bg-border md:hidden" />
          <div className="flex items-center gap-2 px-4 py-3">
            <MapPinIcon className="h-5 w-5 shrink-0 text-muted-foreground" />
            <span className="whitespace-nowrap text-sm text-foreground">Florence, Italy</span>
            <ChevronDownIcon className="h-4 w-4 shrink-0 text-muted-foreground" />
          </div>
          <div className="p-3">
            <Button className="bg-brand-text-color px-6 h-10 w-full text-sm font-semibold rounded-none text-primary-foreground hover:bg-brand-text-color/90 hover:cursor-pointer">
              Search my job
            </Button>
          </div>
        </div>
        <p className="text-black/60 p-4">Popular : UI Designer, UX Researcher, Android, Admin</p>
      </div>
    </div>
  );
}
