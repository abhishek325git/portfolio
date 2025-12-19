import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Education from './components/Education';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Projects />
        <About />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
