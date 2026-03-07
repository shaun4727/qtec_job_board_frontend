import { Button } from '@/components/ui/button';

export const MainMenuComp = () => {
  return (
    <nav className="flex justify-between px-36 py-3">
      <div className="flex items-center gap-12">
        <img
          src={`/app-images/hero-section/Logo.png`}
          alt="logo-img"
          width="300"
          height="300"
          className="w-36 h-8"
        />
        <ul className="flex gap-2.5">
          <li className="text-black/70">Find Jobs</li>
          <li className="text-black/70">Browse Companies</li>
        </ul>
      </div>
      <div className="flex gap-3">
        <Button className="bg-transparent text-brand-text-color hover:bg-brand-text-color hover:text-white rounded-none cursor-pointer">
          {' '}
          Login
        </Button>
        <Button className="bg-brand-text-color text-white hover:bg-brand-text-color hover:text-white rounded-none cursor-pointer">
          {' '}
          Sign Up
        </Button>
      </div>
    </nav>
  );
};
