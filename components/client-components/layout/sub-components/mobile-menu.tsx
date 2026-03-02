import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

export const MobileMenu = () => {
  return (
    <>
      {' '}
      <div className="flex justify-between p-4">
        <Image
          src={'/app-images/hero-section/Logo.png'}
          alt="logo-image"
          width="300"
          height="300"
          style={{ width: '100px', height: '24px' }}
        />
        <Drawer direction="right">
          <DrawerTrigger asChild>
            <Button
              variant="ghost"
              className="p-1.5 border border-border rounded-md hover:bg-muted transition-colors "
            >
              <Menu className="h-5 w-5" />
            </Button>
          </DrawerTrigger>

          <DrawerContent className="h-full w-[70%] max-w-xs rounded-l-none bg-white border-r ">
            {/* Close Button */}
            <DrawerClose asChild>
              <div className="flex justify-end p-3 ">
                <Button size="icon" variant="ghost" className="text-blue-700 hover:bg-blue-600/10">
                  <X className="h-5 w-5 text-foreground" />
                </Button>
              </div>
            </DrawerClose>

            <DrawerTitle className="sr-only">Navigation</DrawerTitle>
            <div>
              <ul>
                <li className="text-black/60 text-sm text-center">Find Jobs</li>
                <li className="text-black/60 text-sm text-center">Browse Companies</li>
              </ul>
              <div className="flex flex-col items-center gap-2">
                <Button variant="ghost" className="text-brand-text-color">
                  Login
                </Button>
                <Button className="bg-brand-text-color border-none rounded-none">Sign Up</Button>
              </div>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
};
