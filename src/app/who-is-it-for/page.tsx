import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/Tabs';
import { PersonaCard } from '@/components/ui/PersonaCard'; // Import the new PersonaCard

export default function WhoIsItForPage() {
  // Data based on ai_guidance/APP_OVERVIEW_AND_STRATEGY.md
  const personas = {
    primary: [
      { 
        id: 'olivia', 
        name: 'Olivia', 
        age: 42, // Example age
        role: 'The Overwhelmed Operations/Process Owner', 
        avatarUrl: '/avatars/olivia.png', // Placeholder avatar path
        income: '$95,000', // Example
        location: 'Manufacturing Hub', // Example
        painPoints: [
          'Constantly firefighting operational issues (delays, errors, rework).',
          'Processes feel clunky and costly.',
          'Suspects "bad data" but struggles to pinpoint or articulate the impact.',
          'Heavily reliant on manual processes and "Excel Hell".'
        ],
        motivations: [
          'Reduce operational errors and costs.',
          'Improve process efficiency and meet targets.',
          'Make her team\'s work less frustrating.',
          'Find practical, actionable solutions with a clear starting point (Project Charter).'
        ]
      },
      { 
        id: 'frank', 
        name: 'Frank', 
        age: 55, // Example
        role: 'The Burdened Finance/Compliance Lead', 
        avatarUrl: '/avatars/frank.png', // Placeholder
        income: '$120,000', // Example
        location: 'Corporate HQ', // Example
        painPoints: [
          'Worries about accuracy and reliability of financial reports and forecasts.',
          'Spends excessive time on manual reconciliation.',
          'Faces pressure during audits and for regulatory compliance.',
          'May not fully trust data from operational systems.'
        ],
        motivations: [
          'Ensure financial reporting accuracy and integrity.',
          'Improve forecasting reliability and streamline financial close.',
          'Reduce financial and compliance risks.',
          'Obtain a clear Project Charter to address DQ issues impacting finance.'
        ]
      },
    ],
    secondary: [
      { 
        id: 'catherine', 
        name: 'Catherine', 
        age: 48, // Example
        role: 'The Strategic CEO / Business Leader', 
        avatarUrl: '/avatars/catherine.png', // Placeholder
        details: 'Needs high-level, strategic insights. Wants to understand how DQ impacts overall business performance, risk, and readiness for future initiatives like AI. Key decision-maker for strategic investments. Receives outputs like Strategic Impact Reports and summaries of proposed DQ Initiative Charters.'
      },
      { 
        id: 'ian', 
        name: 'Ian', 
        age: 38, // Example
        role: 'The Enabling IT Manager / Data Analyst', 
        avatarUrl: '/avatars/ian.png', // Placeholder
        details: 'Understands technical DQ issues but needs to connect them to business impact. Supports business users in diagnosing problems and implementing solutions. Often resource-constrained. Can use Clavis to support users and refine Project Charters.'
      },
      { 
        id: 'david', 
        name: 'David', 
        age: 45, // Example
        role: 'The Proactive Department Head (e.g., Marketing, Sales, HR)', 
        avatarUrl: '/avatars/david.png', // Placeholder
        details: 'Sees data\'s potential in their specific area. Faces departmental inefficiencies due to local data issues. Wants to build a case for better data practices using a Project Charter from Clavis.'
      },
    ],
    anti: [
      { 
        id: 'tech-ds', 
        name: 'Deeply Technical Data Scientist', 
        role: '(in digitally mature orgs)', 
        avatarUrl: '/avatars/tech-ds.png', // Placeholder
        details: 'App\'s diagnostic guidance and charter generation may be too high-level for their specialized work.' 
      },
      { 
        id: 'casual-user', 
        name: 'Casual Browser', 
        role: 'No Specific Problem', 
        avatarUrl: '/avatars/casual.png', // Placeholder
        details: 'Will miss the core value derived from going through a diagnostic journey that culminates in a charter.' 
      },
    ],
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-heading font-bold mb-8 text-text-primary">
        Who Is Clavis For?
      </h1>
      <p className="text-lg text-text-secondary mb-8">
        Clavis is designed to empower a range of professionals who grapple with data quality challenges and their impact on business performance. Find out if Clavis is the right tool for you.
      </p>

      <Tabs defaultValue="primary" className="w-full">
        <TabsList>
          <TabsTrigger value="primary">Primary Personas</TabsTrigger>
          <TabsTrigger value="secondary">Secondary Personas</TabsTrigger>
          <TabsTrigger value="anti">Anti-Personas</TabsTrigger>
        </TabsList>

        <TabsContent value="primary">
          <h2 className="text-3xl font-heading font-semibold my-6 text-text-primary">Key Users We Serve</h2>
          {personas.primary.map(p => (
            <PersonaCard 
              key={p.id} 
              name={`${p.name}, ${p.age}`} 
              role={p.role} 
              avatarUrl={p.avatarUrl}
              income={p.income}
              location={p.location}
              painPoints={p.painPoints}
              motivations={p.motivations}
            />
          ))}
        </TabsContent>

        <TabsContent value="secondary">
          <h2 className="text-3xl font-heading font-semibold my-6 text-text-primary">Others Who Benefit</h2>
          {personas.secondary.map(p => (
            <PersonaCard 
              key={p.id} 
              name={p.age ? `${p.name}, ${p.age}` : p.name} 
              role={p.role} 
              avatarUrl={p.avatarUrl}
              details={p.details}
            />
          ))}
        </TabsContent>

        <TabsContent value="anti">
          <h2 className="text-3xl font-heading font-semibold my-6 text-text-primary">Who Might Not Be the Best Fit</h2>
          {personas.anti.map(p => (
            <PersonaCard 
              key={p.id} 
              name={p.name}
              role={p.role} 
              avatarUrl={p.avatarUrl}
              details={p.details}
            />
          ))}
        </TabsContent>
      </Tabs>
      
      <p className="mt-12 text-center text-text-tertiary">
        No matter your role, if data-driven decisions and operational excellence are your goals, Clavis can help you chart a course to better data quality.
      </p>
    </div>
  );
}
