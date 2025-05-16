import React from 'react';

export default function TosPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-heading font-bold mb-8 text-text-primary">
        Terms of Service
      </h1>
      <div className="prose prose-invert max-w-none text-text-secondary">
        <p>
          Please read these Terms of Service (&quot;Terms&quot;, &quot;Terms of Service&quot;) carefully before using the Clavis application (the &quot;Service&quot;) operated by Kartik Iyer (&quot;us&quot;, &quot;we&quot;, or &quot;our&quot;).
        </p>
        <p>
          Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.
        </p>
        <p>
          By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.
        </p>
        
        <h2 className="text-2xl font-heading font-semibold mt-6 mb-4 text-text-primary">1. Accounts</h2>
        <p>
          [Placeholder for Account terms - e.g., responsibility for account information, security, etc. Clavis might not have user accounts in MVP, so this might be minimal or state &quot;Not Applicable for current version&quot;.]
        </p>

        <h2 className="text-2xl font-heading font-semibold mt-6 mb-4 text-text-primary">2. Intellectual Property</h2>
        <p>
          The Service and its original content (excluding Content provided by users), features, and functionality are and will remain the exclusive property of Kartik Iyer and its licensors. The Service is protected by copyright, trademark, and other laws of both the Netherlands and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Kartik Iyer.
        </p>
        <p>
          The data quality dimensions, definitions, and framework presented within Clavis are based on publicly available DAMA International (Data Management Association) materials and other industry best practices, interpreted and structured by Kartik Iyer. While the underlying concepts are part of the public domain of data management, the specific compilation, presentation, diagnostic logic, and charter generation templates within Clavis are proprietary.
        </p>

        <h2 className="text-2xl font-heading font-semibold mt-6 mb-4 text-text-primary">3. Use of Generated Content (Charters)</h2>
        <p>
          Clavis generates draft Data Quality Initiative Charters (&quot;Generated Content&quot;) based on user inputs. You are free to use, modify, and adapt this Generated Content for your internal business purposes. However, Kartik Iyer retains no responsibility for the outcomes or decisions made based on this Generated Content. It is provided as a starting point and should be reviewed and validated by qualified personnel within your organization.
        </p>

        <h2 className="text-2xl font-heading font-semibold mt-6 mb-4 text-text-primary">4. Disclaimer of Warranties; Limitation of Liability</h2>
        <p>
          [Standard disclaimer and limitation of liability clauses will be added here. The service is provided &quot;AS IS&quot; and &quot;AS AVAILABLE&quot;.]
        </p>
        
        <h2 className="text-2xl font-heading font-semibold mt-6 mb-4 text-text-primary">5. Governing Law</h2>
        <p>
          These Terms shall be governed and construed in accordance with the laws of the Netherlands, without regard to its conflict of law provisions.
        </p>

        <h2 className="text-2xl font-heading font-semibold mt-6 mb-4 text-text-primary">6. Changes</h2>
        <p>
          We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days&apos; notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
        </p>

        <h2 className="text-2xl font-heading font-semibold mt-6 mb-4 text-text-primary">Contact Us</h2>
        <p>
          If you have any questions about these Terms, please contact us. [Contact details or link to contact page will be added here].
        </p>
        <p className="mt-6">
          Last updated: May 15, 2025
        </p>
      </div>
    </div>
  );
}
