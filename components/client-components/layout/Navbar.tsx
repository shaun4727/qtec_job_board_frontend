'use client';

import { useIsMobile } from '@/hooks/use-mobile';
import { MainMenuComp } from './sub-components/main-menu';
import { MobileMenu } from './sub-components/mobile-menu';

export function Navbar() {
  const isMobile = useIsMobile();
  return <>{isMobile ? <MobileMenu /> : <MainMenuComp />}</>;
}
