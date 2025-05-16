import React from 'react';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Making of Clavis Section */}
      <article className="prose prose-invert lg:prose-xl max-w-none text-text-secondary mb-16">
        <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-8 text-text-primary">
          Clavis: Forging a Reality-Based Data Quality Navigator
        </h1>
        <p className="text-lg lg:text-xl italic text-text-tertiary mb-6">By Kartik Iyer</p>
        
        <p>The corporate world is littered with &quot;paper tigers&quot; – initiatives that look impressive but deliver little real substance. After 25 years navigating enterprise transformations, I&apos;ve seen firsthand how often the appearance of progress trumps actual results, especially when it comes to data. But what if we could build tools that help organizations cut through the theater and engage with the reality of their data, empowering them to fix problems that truly matter? This is the story of Clavis, a Data Quality (DQ) diagnostic tool, and how a partnership between decades of human experience and cutting-edge Artificial Intelligence brought it to life.</p>

        <h2 className="text-2xl lg:text-3xl font-heading font-semibold mt-10 mb-4 text-text-primary">Introduction: The &quot;Paper Tiger&quot; in the Data Room & The Quest for &quot;Enough&quot;</h2>
        <p>In many established businesses, particularly those that pre-date our internet-native world, data often feels like a chaotic beast. Leaders know it&apos;s important, yet they grapple daily with the fallout of its poor quality: operational fires, unreliable reports, customer dissatisfaction, and strategic initiatives that stumble before they can run. My career, spanning over two decades in digital transformation, data management, and process excellence (including as a Six-Sigma Black Belt), has repeatedly shown me this pattern: a deep disconnect between the <em>appearance</em> of managing data and the often-painful <em>reality</em> of its impact. This is the &quot;paper tiger&quot; culture I&apos;ve written about – where elaborate processes and presentations mask a lack of tangible outcomes.</p>
        <p>Simultaneously, I&apos;ve observed the relentless pursuit of &quot;more&quot; – more revenue, more data, more complexity – often without a clear understanding of what &quot;enough&quot; good quality data is needed to achieve core objectives sustainably. The vision for Clavis was born from these experiences: to create an intuitive, business-focused tool that helps organizations, especially these traditional ones, move beyond data chaos and &quot;paper tiger&quot; rituals. A tool to help them diagnose how foundational data quality is impacting their core operations and strategic goals, and to guide them toward <em>reality-based</em> improvements – focusing on what&apos;s &quot;enough&quot; to make a real difference.</p>

        <h2 className="text-2xl lg:text-3xl font-heading font-semibold mt-10 mb-4 text-text-primary">The Catalyst: New Tools for a New Era – My Journey into AI</h2>
        <p>The desire to build Clavis wasn&apos;t new, but the means to do so efficiently and with the required depth felt challenging using traditional methods alone. The landscape of enterprise data is vast, and structuring the necessary knowledge – like the comprehensive DAMA Data Management Body of Knowledge (DMBoK) framework for data quality – is a monumental task.</p>
        <p>My recent immersion into web development, coding, and Generative AI via platforms like Freecodecamp, Udemy, and Coursera, and my hands-on experience building AI-enabled projects (like an AI-assisted Data Modeler, visible at <a href="https://datamodel.iyer.dev/" target="_blank" rel="noopener noreferrer" className="text-accent-blue-light hover:underline">datamodel.iyer.dev</a>), opened a new pathway. I saw how AI, specifically powerful models like Google&apos;s Gemini, could act as an incredible force multiplier. It wasn&apos;t about AI replacing human expertise, but augmenting it, allowing a seasoned practitioner to codify and scale their insights in ways previously unimaginable. My earlier success in using AI to generate complex conceptual data models in hours – a task that traditionally took months – was a profound proof point.</p>
        
        {/* ... (Include other sections of "Making of Clavis" similarly) ... */}
        <p className="mt-8">
          <em>(The full &quot;Making of Clavis&quot; article continues with details on the Human-AI collaboration, key learnings, and the future vision for Clavis. This content will be fully integrated here.)</em>
        </p>
      </article>

      {/* Builder Profile Section */}
      <section className="mt-20 py-12 bg-glass-bg border border-glass-border rounded-xl shadow-xl">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-10 text-text-primary text-center">Meet the Creator: Kartik Iyer</h2>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
            <div className="w-48 h-48 md:w-60 md:h-60 relative rounded-full overflow-hidden shadow-lg border-4 border-accent-3 shrink-0">
              <Image 
                src="/assets/Kartik Iyer.jpg" // Path from public folder
                alt="Kartik Iyer" 
                layout="fill" 
                objectFit="cover" 
              />
            </div>
            <div className="text-text-secondary text-center md:text-left">
              <p className="text-lg mb-4">
                Visionary leader with over 23 years of experience driving digital transformation and innovation at the intersection of data management, AI, and emerging technologies. Adept at translating complex technical concepts into actionable business strategies, fostering cross-functional collaboration, and driving organizational change.
              </p>
              <p className="mb-4">
                As a Six-Sigma Black Belt, ITIL V3 foundation and Scaled Agile certified professional, I maintain a customer-centric approach, making data-driven decisions to meet dynamic customer and business goals. I am dedicated to blending my management skills with emergent technologies to drive progress.
              </p>
              <p className="mb-6">
                My portfolio showcasing AI-enabled projects is available at <a href="https://kartik.iyer.dev" target="_blank" rel="noopener noreferrer" className="text-accent-blue-light hover:underline">kartik.iyer.dev</a>.
              </p>
              <div className="flex justify-center md:justify-start space-x-4">
                <a href="mailto:kartik@iyer.dev" className="text-accent-2 hover:text-accent-2/80 transition-colors">Email Me</a>
                <a href="https://www.linkedin.com/in/kartikiyer/" target="_blank" rel="noopener noreferrer" className="text-accent-2 hover:text-accent-2/80 transition-colors">LinkedIn</a>
                 {/* Add other social links if desired */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
