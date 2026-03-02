import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '../Container';

export const MainMenuComp = () => {
  return (
    <Container className="flex items-center justify-between h-16 ">
      <div className="flex items-center gap-8">
        <Image
          src={'/app-images/hero-section/Logo.png'}
          alt="logo-image"
          width="300"
          height="300"
          style={{ width: '100px' }}
        />
        <div className="hidden md:flex gap-6 text-sm text-muted-foreground">
          <Link href="#">Find Jobs</Link>
          <Link href="#">Browse Companies</Link>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Button variant="ghost" className="text-brand-text-color">
          Login
        </Button>
        <Button className="bg-brand-text-color border-none rounded-none">Sign Up</Button>
      </div>
    </Container>
  );
};
