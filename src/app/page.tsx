import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Showcase from '@/components/Showcase';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { getAllPrints } from '@/lib/content';

export default function Home() {
  const prints = getAllPrints();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Showcase prints={prints} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
