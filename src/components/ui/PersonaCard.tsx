import React from 'react';
import Image from 'next/image'; // For persona avatars

interface PersonaCardProps {
  name: string;
  role: string;
  avatarUrl?: string; // Optional: URL for persona avatar image
  details?: string | React.ReactNode; // Can be simple text or more complex JSX for pain points/motivations
  income?: string;
  location?: string;
  painPoints?: string[];
  motivations?: string[];
  className?: string;
}

export const PersonaCard: React.FC<PersonaCardProps> = ({
  name,
  role,
  avatarUrl,
  details,
  income,
  location,
  painPoints,
  motivations,
  className,
}) => {
  return (
    <div
      className={`bg-glass-bg border border-glass-border rounded-xl p-6 md:p-8 shadow-xl mb-8 transition-all duration-300 ease-out hover:shadow-2xl hover:border-accent-blue-light/50 hover:scale-[1.01] ${className}`}
      data-spotlight-hover="true" // For spotlight effect on hover
    >
      <div className="flex flex-col sm:flex-row items-start gap-6 mb-6">
        {avatarUrl && (
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-accent-3 shadow-lg shrink-0">
            <Image src={avatarUrl} alt={`${name} - ${role}`} layout="fill" objectFit="cover" />
          </div>
        )}
        <div className="flex-grow">
          <h3 className="text-3xl font-heading font-bold text-accent-1 mb-1">{name}</h3>
          <p className="text-text-secondary font-medium text-lg">{role}</p>
          {(income || location) && (
            <div className="mt-3 flex flex-wrap gap-x-6 gap-y-1 text-sm text-text-tertiary">
              {income && <p><strong className="text-text-secondary">Income:</strong> {income}</p>}
              {location && <p><strong className="text-text-secondary">Location:</strong> {location}</p>}
            </div>
          )}
        </div>
      </div>

      {details && typeof details === 'string' && (
        <p className="text-text-secondary mb-6">{details}</p>
      )}
      {details && typeof details !== 'string' && (
        <div className="mb-6 text-text-secondary">{details}</div>
      )}

      {painPoints && painPoints.length > 0 && (
        <div className="mb-6">
          <h4 className="text-xl font-heading font-semibold text-accent-3 mb-2">Pain Points</h4>
          <ul className="list-disc list-inside space-y-1 text-text-secondary">
            {painPoints.map((point, index) => (
              <li key={`pain-${index}`}>{point}</li>
            ))}
          </ul>
        </div>
      )}

      {motivations && motivations.length > 0 && (
        <div>
          <h4 className="text-xl font-heading font-semibold text-accent-2 mb-2">Motivations</h4>
          <ul className="list-disc list-inside space-y-1 text-text-secondary">
            {motivations.map((point, index) => (
              <li key={`motivation-${index}`}>{point}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
