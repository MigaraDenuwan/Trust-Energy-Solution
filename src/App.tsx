import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Benefits } from './components/Benefits';
import { CTA } from './components/CTA';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
export function App() {
  return <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Benefits />
        <CTA />
        <About />
        <Testimonials />
      </main>
      <Footer />
    </div>;
}