import Image from 'next/image';

export const Advertisement = () => {
  return (
    <div className="p-4 md:px-32">
      <p className="text-black/70 mb-8">Companies we helped grow</p>
      <div className="grid grid-cols-2 gap-4 justify-items-between md:flex md:flex-row md:justify-between md:items-center">
        <Image
          src={'/app-images/hero-section/amd-logo-1.png'}
          width={100}
          height={100}
          alt="logo"
          className="mx-auto md:mx-0"
        />
        <Image
          src={'/app-images/hero-section/intel-3.png'}
          width={100}
          height={100}
          alt="logo"
          className="mx-auto md:mx-0"
        />
        <Image
          src={'/app-images/hero-section/talkit 1.png'}
          width={100}
          height={100}
          alt="logo"
          className="mx-auto md:mx-0"
        />
        <Image
          src={'/app-images/hero-section/tesla-9 1.png'}
          width={100}
          height={100}
          alt="logo"
          className="mx-auto md:mx-0"
        />
        <Image
          src={'/app-images/hero-section/vodafone-2017-logo.png'}
          width={100}
          height={100}
          alt="logo"
          className="mx-auto md:mx-0 col-span-2 md:col-span-1"
        />
      </div>
    </div>
  );
};
