import React from 'react';
import Nav from './components/Nav';
import AboutSection from './components/AboutSection';
// import WorkSection from './components/WorkSection';
import ContactSection from './components/ContactSection';
import SectionDivider from './components/SectionDivider';
import Footer from './components/Footer';

const App = () => {
  return (
    <React.Fragment>
      <Nav />
      <div className="main-container">
        <main>
          <AboutSection />
          {/* <SectionDivider /> */}
          {/* <WorkSection /> */}
          <SectionDivider />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default App;
