import Image from 'next/image';

export function HeroSection() {
  return (
    <div className="px-4 md:px-36">
      <div className="h-125 flex justify-end">
        <Image
          src={`/app-images/hero-section/Pattern.png`}
          alt="pattern-images"
          width="600"
          height="600"
          className="w-240"
        />
      </div>
    </div>
  );
}
