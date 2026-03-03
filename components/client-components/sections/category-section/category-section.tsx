import Image from 'next/image';

export const CategorySection = () => {
  return (
    <div className="px-4 flex flex-col gap-4 mt-8 md:px-32">
      <div className="md:flex md:justify-between items-center">
        {' '}
        <h1 className="text-2xl font-bold">
          Explore by <span className="text-secondary-text">category</span>
        </h1>
        <div className="hidden md:flex gap-2.5 cursor-pointer h-6">
          <h4 className=" text-brand-text-color font-semibold">Show all jobs</h4>
          <Image
            src={'/app-images/category-section/arrow.png'}
            alt="browse-icon"
            width="100"
            height="100"
            style={{ width: '25px' }}
          />
        </div>
      </div>
      <div className="flex flex-col md:grid md:grid-cols-4 gap-4">
        <div className="flex gap-4 border p-3 md:block  md:pl-23">
          <Image
            src={'/app-images/category-section/Icon.png'}
            alt="category-image"
            width="200"
            height="200"
            style={{ width: '48px' }}
          />
          <div>
            <h4 className="font-bold">Design</h4>
            <p className="text-black/70">235 jobs available</p>
          </div>
        </div>
        <div className="flex gap-4 border p-3 md:block md:pl-23">
          <Image
            src={'/app-images/category-section/Icon1.png'}
            alt="category-image"
            width="200"
            height="200"
            style={{ width: '40px' }}
          />
          <div>
            <h4 className="font-bold">Sales</h4>
            <p className="text-black/70">235 jobs available</p>
          </div>
        </div>
        <div className="flex gap-4 border p-3 md:block md:pl-23">
          <Image
            src={'/app-images/category-section/Icon2.png'}
            alt="category-image"
            width="200"
            height="200"
            style={{ width: '40px' }}
          />
          <div>
            <h4 className="font-bold">Marketing</h4>
            <p className="text-black/70">235 jobs available</p>
          </div>
        </div>
        <div className="flex gap-4 border p-3 md:block md:pl-23">
          <Image
            src={'/app-images/category-section/Icon2.png'}
            alt="category-image"
            width="200"
            height="200"
            style={{ width: '40px' }}
          />
          <div>
            <h4 className="font-bold">Marketing</h4>
            <p className="text-black/70">235 jobs available</p>
          </div>
        </div>
        <div className="flex gap-4 border p-3 md:block md:pl-23">
          <Image
            src={'/app-images/category-section/Icon2.png'}
            alt="category-image"
            width="200"
            height="200"
            style={{ width: '40px' }}
          />
          <div>
            <h4 className="font-bold">Marketing</h4>
            <p className="text-black/70">235 jobs available</p>
          </div>
        </div>
      </div>
      <div className="flex gap-2.5 cursor-pointer md:hidden">
        <h4 className=" text-brand-text-color font-semibold">Show all jobs</h4>
        <Image
          src={'/app-images/category-section/arrow.png'}
          alt="browse-icon"
          width="100"
          height="100"
          style={{ width: '25px' }}
        />
      </div>
    </div>
  );
};
