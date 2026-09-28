import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SkillsTicker } from './components/SkillsTicker';
import { ProjectsSection } from './components/ProjectsSection';
import { ProjectModal } from './components/ProjectModal';
import { Interactive3DStudio } from './components/Interactive3DStudio';
import { ServicesSection } from './components/ServicesSection';
import { ProjectEstimator } from './components/ProjectEstimator';
import { WhyWorkWithMe } from './components/WhyWorkWithMe';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Project } from './types';

export default function App() {
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const [inquiryService, setInquiryService] = useState<string>('');
  const [inquiryNotes, setInquiryNotes] = useState<string>('');
  const [inquiryTimeline, setInquiryTimeline] = useState<string>('');

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenCaseStudy = (project: Project) => {
    setActiveModalProject(project);
  };

  const handleInquireFromModal = (projectName: string) => {
    setInquiryService(projectName);
    setInquiryNotes(`Inquiry regarding case study: ${projectName}`);
    scrollToContact();
  };

  const handleSelectService = (serviceTitle: string) => {
    setInquiryService(serviceTitle);
    scrollToContact();
  };

  const handleApplyEstimate = (summary: string, timeline: string) => {
    setInquiryNotes(summary);
    setInquiryTimeline(timeline);
    scrollToContact();
  };

  return (
    <div className="min-h-screen bg-[#08090d] text-neutral-100 flex flex-col selection:bg-amber-400 selection:text-black">
      {/* Top Bar Navigation */}
      <Navbar onOpenInquiry={scrollToContact} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Editorial Split-Screen Hero */}
        <Hero onOpenInquiry={scrollToContact} />

        {/* 10 Core Capabilities & Skills Explorer */}
        <SkillsTicker />

        {/* Featured Projects & Case Studies */}
        <ProjectsSection onOpenCaseStudy={handleOpenCaseStudy} />

        {/* Interactive 3D Shading & Material Studio */}
        <Interactive3DStudio />

        {/* Services & Core Offerings */}
        <ServicesSection onSelectServiceForInquiry={handleSelectService} />

        {/* Interactive Timeline & Scope Estimator */}
        <ProjectEstimator onApplyEstimateToInquiry={handleApplyEstimate} />

        {/* Why Work With Aarohi + Process + Evidence */}
        <WhyWorkWithMe />

        {/* Direct Contact & Proposal Request Form */}
        <ContactSection
          initialService={inquiryService}
          initialNotes={inquiryNotes}
          initialTimeline={inquiryTimeline}
        />
      </main>

      {/* Editorial Footer */}
      <Footer />

      {/* Case Study Detail Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
        onInquireSimilar={handleInquireFromModal}
      />
    </div>
  );
}
