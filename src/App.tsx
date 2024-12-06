
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ProfileCard from './components/profile/ProfileCard';
import Education from './components/profile/Education';
import FeaturedProjects from './components/projects/FeaturedProjects';
import OtherProjects from './components/projects/OtherProjects';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="py-16 px-6">
        <section id="profile" className="mb-16">
          <ProfileCard />
          <Education />
        </section>
        
        <section id="projects" className="mb-16">
          <FeaturedProjects />
          <OtherProjects />
        </section>
        
        <section id="contact" className="mb-16">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;