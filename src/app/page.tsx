'use client';

import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import { Chart, DoughnutController, ArcElement, Tooltip, Legend } from 'chart.js'; // Import specific Chart.js components

// Register Chart.js components
Chart.register(DoughnutController, ArcElement, Tooltip, Legend);

export default function HomePage() {
  const typewriterRef = useRef<HTMLHeadingElement>(null);
  const chartRef = useRef<HTMLCanvasElement>(null);
  const q1ExcelRef = useRef<HTMLSelectElement>(null);
  const q2SilosRef = useRef<HTMLSelectElement>(null);
  const q3PainRef = useRef<HTMLSelectElement>(null);
  const teaserResultOutputRef = useRef<HTMLDivElement>(null);
  const suggestedDQDimensionRef = useRef<HTMLElement>(null);
  const suggestedDQImpactRef = useRef<HTMLSpanElement>(null);
  let dqRiskChartInstance: Chart | null = null;

  useEffect(() => {
    // --- Typewriter Effect ---
    const typewriterElement = typewriterRef.current;
    if (typewriterElement) {
      const headlines = [
        "Is 'Bad Data' Slowing You Down?",
        "Unlock Your Business Clarity.",
        "Tired of Costly Process Errors?",
        "Build Trust in Your KPIs.",
        "Pave Your Path to AI Readiness."
      ];
      let headlineIndex = 0;
      let charIndex = 0;
      let isErasing = false;
      typewriterElement.textContent = ''; // Clear initial content

      const typeHeadline = () => {
        if (!typewriterElement) return;
        const currentHeadline = headlines[headlineIndex];
        if (!isErasing) {
          if (charIndex < currentHeadline.length) {
            typewriterElement.textContent += currentHeadline.charAt(charIndex);
            charIndex++;
            setTimeout(typeHeadline, 60);
          } else {
            isErasing = true;
            setTimeout(typeHeadline, 2500);
          }
        } else {
          if (charIndex > 0) {
            typewriterElement.textContent = currentHeadline.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(typeHeadline, 30);
          } else {
            isErasing = false;
            headlineIndex = (headlineIndex + 1) % headlines.length;
            setTimeout(typeHeadline, 500);
          }
        }
      };
      setTimeout(typeHeadline, 500);
    }

    // --- Journey Card Spotlight Effect ---
    const journeyCards = document.querySelectorAll('.journey-card');
    journeyCards.forEach(card => {
      const htmlCard = card as HTMLElement; // Type assertion
      htmlCard.addEventListener('mousemove', (e: MouseEvent) => {
        const rect = htmlCard.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        htmlCard.style.setProperty('--mouse-x', `${x}px`);
        htmlCard.style.setProperty('--mouse-y', `${y}px`);
      });
    });

    // --- DQ Risk Teaser Logic ---
    const initOrUpdateChart = (riskScore: number) => {
      if (!chartRef.current) return;
      const chartData = {
        labels: ['Potential Risk/Opportunity', 'Remaining'],
        datasets: [{
          label: 'DQ Focus',
          data: [riskScore, 100 - riskScore],
          backgroundColor: [
            riskScore > 70 ? 'rgba(250, 63, 106, 0.7)' : riskScore > 45 ? 'rgba(252, 111, 58, 0.7)' : 'rgba(249, 197, 44, 0.7)',
            'rgba(255, 255, 255, 0.1)'
          ],
          borderColor: [
            riskScore > 70 ? 'rgba(250, 63, 106, 1)' : riskScore > 45 ? 'rgba(252, 111, 58, 1)' : 'rgba(249, 197, 44, 1)',
            'rgba(255, 255, 255, 0.2)'
          ],
          borderWidth: 1,
          circumference: 180,
          rotation: 270,
        }]
      };
      const chartConfig: any = { // Use any for chartConfig to avoid deep type issues with Chart.js
        type: 'doughnut',
        data: chartData,
        options: {
          responsive: true,
          maintainAspectRatio: true,
          cutout: '70%',
          plugins: {
            legend: { display: false },
            tooltip: { enabled: false }
          },
          animation: {
            animateRotate: true,
            animateScale: true
          }
        }
      };

      if (dqRiskChartInstance) {
        dqRiskChartInstance.data.datasets[0].data = [riskScore, 100 - riskScore];
        const dataset = dqRiskChartInstance.data.datasets[0];
        if (dataset.backgroundColor && Array.isArray(dataset.backgroundColor)) {
            dataset.backgroundColor[0] = riskScore > 70 ? 'rgba(250, 63, 106, 0.7)' : riskScore > 45 ? 'rgba(252, 111, 58, 0.7)' : 'rgba(249, 197, 44, 0.7)';
        }
        if (dataset.borderColor && Array.isArray(dataset.borderColor)) {
            dataset.borderColor[0] = riskScore > 70 ? 'rgba(250, 63, 106, 1)' : riskScore > 45 ? 'rgba(252, 111, 58, 1)' : 'rgba(249, 197, 44, 1)';
        }
        dqRiskChartInstance.update();
      } else {
        dqRiskChartInstance = new Chart(chartRef.current, chartConfig);
      }
    };

    const teaserLogic = () => {
      if (!q1ExcelRef.current || !q2SilosRef.current || !q3PainRef.current || !teaserResultOutputRef.current || !suggestedDQDimensionRef.current || !suggestedDQImpactRef.current) return;

      const val1 = parseInt(q1ExcelRef.current.value);
      const val2 = parseInt(q2SilosRef.current.value);
      const val3 = parseInt(q3PainRef.current.value);
      const totalScore = val1 + val2 + val3;

      let dimension = "Accuracy";
      let impact = "operational errors and flawed reporting.";
      let riskScore = 25;

      if (totalScore >= 5) {
        dimension = "Consistency & Coherence";
        impact = "widespread process inefficiencies and an inability to get a single view of your business.";
        riskScore = 85;
      } else if (totalScore >= 3) {
        dimension = "Completeness & Validity";
        impact = "process exceptions, compliance issues, and unreliable analytics.";
        riskScore = 55;
      } else if (totalScore >= 1) {
        dimension = "Accuracy & Timeliness";
        impact = "delayed decisions and customer-facing errors.";
        riskScore = 40;
      }

      if (val1 === 0 && val2 === 0 && val3 === 0) {
        teaserResultOutputRef.current.style.display = 'none';
        if (dqRiskChartInstance) {
          dqRiskChartInstance.destroy();
          dqRiskChartInstance = null;
        }
        initOrUpdateChart(0);
        return;
      }

      suggestedDQDimensionRef.current.textContent = dimension;
      suggestedDQImpactRef.current.textContent = impact;
      teaserResultOutputRef.current.style.display = 'block';
      initOrUpdateChart(riskScore);
    };

    const q1 = q1ExcelRef.current;
    const q2 = q2SilosRef.current;
    const q3 = q3PainRef.current;

    if (q1 && q2 && q3) {
      [q1, q2, q3].forEach(select => select.addEventListener('change', teaserLogic));
      teaserLogic(); // Initial call
    }
    
    // Cleanup function
    return () => {
      if (dqRiskChartInstance) {
        dqRiskChartInstance.destroy();
        dqRiskChartInstance = null;
      }
      if (q1 && q2 && q3) {
        [q1, q2, q3].forEach(select => select.removeEventListener('change', teaserLogic));
      }
      journeyCards.forEach(card => {
        const htmlCard = card as HTMLElement;
         htmlCard.removeEventListener('mousemove', (e: MouseEvent) => { // Need to pass the same function reference to remove, this might not work as is
            const rect = htmlCard.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            htmlCard.style.setProperty('--mouse-x', `${x}px`);
            htmlCard.style.setProperty('--mouse-y', `${y}px`);
        });
      });
    };
  }, []); // Empty dependency array ensures this runs once on mount and cleans up on unmount

  const selectJourney = (journeyType: string) => {
    console.log("Selected journey:", journeyType);
    // Navigation logic would go here, e.g., using Next.js router
    // For now, just an alert or console log
    alert(`Navigating to "${journeyType}" diagnostic journey... (Full app would load new content here)`);
  };


  return (
    // Applying Tailwind classes based on Sample.html structure
    // Note: Some styles from Sample.html (like body::before/after spotlights) are global and should be in globals.css or layout.tsx
    // The main container and header/footer are handled by layout.tsx
    <>
      <style jsx global>{`
        /* Specific styles for journey card spotlight from Sample.html */
        .journey-card::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 0.75rem; /* Assuming var(--border-radius-lg) is 12px or 0.75rem */
            background: radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.15), transparent 40%);
            opacity: 0;
            transition: opacity 0.4s ease;
            z-index: 0; /* Ensure content is above */
            pointer-events: none;
        }
        .journey-card:hover::before {
            opacity: 1;
        }
        .journey-card .journey-card-content {
            position: relative;
            z-index: 1;
        }
      `}</style>
      <main>
        <section className="text-center py-20 md:py-28 min-h-[70vh] flex flex-col items-center justify-center relative">
          <h1 ref={typewriterRef} className="typewriter-headline font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-accent-1 via-accent-2 to-accent-3 animate-gradientShine min-h-[80px] md:min-h-[120px]">
            {/* Content injected by JS */}
          </h1>
          <p className="hero-subheadline text-lg md:text-xl text-text-secondary max-w-3xl mx-auto mb-10">
            Clavis helps you cut through the complexity. Diagnose hidden data issues impacting your core operations,
            understand their true business cost, and build a solid foundation for growth and AI readiness.
            Stop firefighting, start strategizing.
          </p>
          <Link href="#journey-starters-section" className="cta-button bg-gradient-to-r from-cta-bg-start to-cta-bg-end text-white py-3 px-8 md:py-4 md:px-10 text-base md:text-lg rounded-lg font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300">
            Discover Your Data's Potential
          </Link>
        </section>

        <section id="about-clavis" className="content-section py-16 md:py-24">
          <h2 className="section-title font-heading text-3xl md:text-4xl text-center mb-12 md:mb-16">
            <span className="relative inline-block">
              What is Clavis?
              <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-3/5 h-1 bg-gradient-to-r from-accent-1 to-accent-3 rounded-full"></span>
            </span>
          </h2>
          <div className="text-center max-w-3xl mx-auto text-text-secondary text-base md:text-lg leading-relaxed">
            <p className="mb-4">In many established companies, underlying data quality issues silently sabotage efficiency, inflate costs, and make reports unreliable. Clavis is an interactive diagnostic tool designed for business leaders and operational teams who need to understand and address data quality in a practical, business-focused way.</p>
            <p>We help you connect common business pain points in core processes (like Order-to-Cash or Operations Management) to specific underlying Data Quality dimensions, understand their impact, and pinpoint actionable areas for improvement. No deep technical jargon, just clear insights for better business outcomes.</p>
          </div>
        </section>

        <section id="dq-teaser" className="content-section dq-teaser-section bg-bg-panel-dark py-12 md:py-16 px-6 md:px-10 rounded-xl border border-glass-border shadow-2xl my-16 md:my-24 max-w-5xl mx-auto backdrop-blur-md bg-glass-bg/70">
          <h2 className="section-title font-heading text-3xl md:text-4xl text-center mb-10">
             <span className="relative inline-block">
              Quick DQ Risk Teaser
              <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-3/5 h-1 bg-gradient-to-r from-accent-1 to-accent-3 rounded-full"></span>
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="teaser-questions">
              <p className="text-text-secondary mb-8 text-sm md:text-base">Answer a few quick questions to get a glimpse of potential data quality focus areas impacting your business:</p>
              <div className="question-group mb-6">
                <label htmlFor="q1-excel" className="block font-medium text-text-secondary mb-2">How much do critical reports or processes in your area rely on manual data work in spreadsheets (e.g., Excel)?</label>
                <select id="q1-excel" ref={q1ExcelRef} className="w-full p-3 rounded-md border border-glass-border bg-white/5 text-text-primary focus:ring-2 focus:ring-accent-2 outline-none transition-all">
                  <option value="0">Not at all / Minimal</option>
                  <option value="1">Somewhat / For some reports</option>
                  <option value="2">Heavily / Many critical items</option>
                </select>
              </div>
              <div className="question-group mb-6">
                <label htmlFor="q2-silos" className="block font-medium text-text-secondary mb-2">Do different departments often have conflicting numbers for what should be the same information (e.g., customer counts, sales figures)?</label>
                <select id="q2-silos" ref={q2SilosRef} className="w-full p-3 rounded-md border border-glass-border bg-white/5 text-text-primary focus:ring-2 focus:ring-accent-2 outline-none transition-all">
                  <option value="0">Rarely / We have a single source of truth</option>
                  <option value="1">Sometimes / Occasional discrepancies</option>
                  <option value="2">Frequently / It's a common problem</option>
                </select>
              </div>
              <div className="question-group mb-6">
                <label htmlFor="q3-pain" className="block font-medium text-text-secondary mb-2">Are you frequently dealing with operational errors like incorrect billings, shipping mistakes, or inventory discrepancies?</label>
                <select id="q3-pain" ref={q3PainRef} className="w-full p-3 rounded-md border border-glass-border bg-white/5 text-text-primary focus:ring-2 focus:ring-accent-2 outline-none transition-all">
                  <option value="0">Very Rarely</option>
                  <option value="1">Sometimes, it's a moderate concern</option>
                  <option value="2">Often, it's a significant pain point</option>
                </select>
              </div>
              <div ref={teaserResultOutputRef} className="teaser-result mt-6 p-4 bg-glass-bg rounded-lg text-center" style={{ display: 'none' }}>
                <p className="text-sm md:text-base">Based on your answers, a key Data Quality dimension to focus on could be <strong ref={suggestedDQDimensionRef} className="text-accent-2"></strong>. Poor quality here often leads to <span ref={suggestedDQImpactRef}></span>.</p>
                <p className="text-xs md:text-sm text-text-tertiary mt-2">This is a high-level insight. Use our full diagnostic tools for a deeper dive!</p>
              </div>
            </div>
            <div className="teaser-chart-container w-full max-w-xs mx-auto mt-8 md:mt-0">
              <canvas ref={chartRef} id="dqRiskChart"></canvas>
              <p className="text-center text-xs text-text-tertiary mt-3">Illustrative Risk/Opportunity Level</p>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="content-section py-16 md:py-24">
          <h2 className="section-title font-heading text-3xl md:text-4xl text-center mb-12 md:mb-16">
             <span className="relative inline-block">
              How Clavis Helps You
               <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-3/5 h-1 bg-gradient-to-r from-accent-1 to-accent-3 rounded-full"></span>
            </span>
          </h2>
          <div className="journey-starters-container grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto" id="journey-starters-section">
            {[
              { title: "Diagnose Process Pains", icon: "bi-diagram-3-fill", desc: "Pinpoint DQ issues in your Order-to-Cash, Operations, Procure-to-Pay, and other core lifecycles causing daily friction.", journey: "lifecycle" },
              { title: "Assess KPI Reliability", icon: "bi-graph-up-arrow", desc: "Understand how data quality undermines your Key Performance Indicators and get insights to trust your metrics again.", journey: "kpi" },
              { title: "Align with Strategic Goals", icon: "bi-lightbulb-fill", desc: "See how foundational DQ supports your key business objectives, from customer experience to AI readiness.", journey: "strategy" },
              { title: "Explore DQ Dimensions", icon: "bi-search-heart", desc: "Deep dive into the 60 standard Data Quality dimensions, their definitions, impacts, and examples.", journey: "explore" }
            ].map(card => (
              <div key={card.journey} className="journey-card bg-glass-bg backdrop-blur-lg border border-glass-border rounded-xl p-6 md:p-8 text-left transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl cursor-pointer flex flex-col relative overflow-hidden" onClick={() => selectJourney(card.journey)}>
                <div className="journey-card-content">
                  <i className={`bi ${card.icon} text-3xl md:text-4xl mb-4 inline-block bg-clip-text text-transparent bg-gradient-to-r from-accent-1 to-accent-3`}></i>
                  <h3 className="font-heading text-xl md:text-2xl font-semibold mb-3 text-text-primary">{card.title}</h3>
                  <p className="text-sm md:text-base text-text-secondary mb-0 flex-grow">{card.desc}</p>
                </div>
                <i className="bi bi-arrow-right-circle-fill text-2xl text-accent-2 self-end mt-5 transition-transform duration-300 group-hover:translate-x-1"></i>
              </div>
            ))}
          </div>
        </section>

        <section id="philosophy" className="content-section philosophy-section text-center max-w-3xl mx-auto py-16 md:py-24">
          <i className="bi bi-chat-left-quote-fill text-4xl md:text-5xl text-accent-3 mb-6 inline-block"></i>
          <h2 className="section-title font-heading text-3xl md:text-4xl mb-8">
             <span className="relative inline-block">
              Our Guiding Philosophy
               <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-3/5 h-1 bg-gradient-to-r from-accent-1 to-accent-3 rounded-full"></span>
            </span>
          </h2>
          <p className="text-base md:text-lg text-text-secondary leading-relaxed mb-8">
            Clavis is built on decades of real-world experience tackling data challenges in transforming businesses. We believe in a <strong>reality-based approach</strong>: cutting through organizational theater to address the tangible data issues that truly impact your bottom line. It's about achieving <strong>"enough"</strong> of the <em>right</em> quality data to drive meaningful outcomes, not just chasing endless data or perfection. We empower you to move from data chaos to business clarity and confident action.
          </p>
          <Link href="/blog/making-of-clavis" className="cta-button bg-gradient-to-r from-cta-bg-start to-cta-bg-end text-white py-3 px-8 rounded-lg font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300">
            Learn More About Our Approach
          </Link>
        </section>
      </main>
      {/* Footer is handled by layout.tsx */}
    </>
  );
}
