import Header from '@/components/header';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="w-full lg:w-1/2">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground">
            Caleb Makafui Senyah
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-muted-foreground">
            I build impactful solutions at the intersection of <span className="text-primary">healthcare</span> and <span className="text-primary">technology</span>.
          </p>
        </div>
        <div className="hidden lg:flex w-1/2 justify-center items-center">
          <Image
            src="https://placehold.co/500x500.png"
            alt="Caleb Senyah"
            width={500}
            height={500}
            className="rounded-full shadow-2xl"
            data-ai-hint="man portrait"
          />
        </div>
      </main>
    </div>
  );
}
