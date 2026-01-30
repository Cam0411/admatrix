
import React, { Suspense, lazy } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';

// Lazy load components for better performance
const ProblemSection = lazy(() => import('./components/ProblemSection'));
const SolutionSection = lazy(() => import('./components/SolutionSection'));
const BlueprintSection = lazy(() => import('./components/BlueprintSection'));
const TrendsSection = lazy(() => import('./components/TrendsSection'));
const The2026EdgeSection = lazy(() => import('./components/The2026EdgeSection'));
const RoadmapSection = lazy(() => import('./components/RoadmapSection'));
const CaseStudiesSection = lazy(() => import('./components/CaseStudiesSection'));
const KpiSection = lazy(() => import('./components/KpiSection'));
const TestimonialsSection = lazy(() => import('./components/TestimonialsSection'));
const FaqSection = lazy(() => import('./components/FaqSection'));
const ContactSection = lazy(() => import('./components/ContactSection'));
const Footer = lazy(() => import('./components/Footer'));

const LoadingSpinner: React.FC = () => (
    <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-600"></div>
    </div>
);

const App: React.FC = () => {
  return (
    <div className="bg-white min-h-screen text-gray-700 font-sans">
      <Header />
      <main>
        <Hero />
        <Suspense fallback={<LoadingSpinner />}>
          <ProblemSection />
          <SolutionSection />
          <BlueprintSection />
          <The2026EdgeSection />
          <RoadmapSection />
          <KpiSection />
          <TrendsSection />
          <CaseStudiesSection />
          <TestimonialsSection />
          <ContactSection />
          <FaqSection />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;