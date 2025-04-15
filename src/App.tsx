import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Benefits } from './components/Benefits';
import { CTA } from './components/CTA';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { Contact } from './pages/Contact';  // Import the Contact page

export function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Services />
                <Benefits />
                <CTA />
                <About />
                <Testimonials />
              </>
            } />
            <Route path="/contact" element={<Contact />} />  {/* New route for contact */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
