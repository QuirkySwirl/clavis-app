import React from 'react';

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-heading font-bold mb-8 text-text-primary">
        Privacy Policy
      </h1>
      <div className="prose prose-invert max-w-none text-text-secondary">
        <p>
          Your privacy is important to us. It is Kartik Iyer&apos;s policy to respect your privacy regarding any information we may collect from you across our application, Clavis, and other sites we own and operate.
        </p>

        <h2 className="text-2xl font-heading font-semibold mt-6 mb-4 text-text-primary">1. Information We Collect</h2>
        <p>
          <strong>Log data:</strong> When you access Clavis, our servers may automatically log standard data provided by your web browser. This data is considered &quot;non-identifying information&quot;, as it does not personally identify you on its own. It may include your computer&apos;s Internet Protocol (IP) address, your browser type and version, the pages you visit, the time and date of your visit, the time spent on each page, and other details.
        </p>
        <p>
          <strong>User Input for Diagnostics:</strong> Clavis allows users to input information about their business processes, KPIs, strategic objectives, and pain points to receive diagnostic results and generate draft initiative charters. This information is processed in real-time to provide the service and is not stored persistently on our servers after your session ends. We do not associate this input with any personal identifiers.
        </p>
        <p>
          <strong>No Personal Data for Core Functionality:</strong> The core functionality of Clavis (diagnostics and charter generation) does not require you to create an account or provide personally identifiable information (PII) such as your name, email address, or company name to use the tool. Any such information you might mentally associate with your inputs is not captured or stored by Clavis.
        </p>

        <h2 className="text-2xl font-heading font-semibold mt-6 mb-4 text-text-primary">2. Use of Information</h2>
        <p>
          We may use non-identifying log data to understand how our visitors use the application, so that we can improve their experience of Clavis in future.
        </p>
        <p>
          Information provided by you for diagnostic purposes is used solely to generate the diagnostic results and draft charters within your active session. This information is not used for any other purpose.
        </p>

        <h2 className="text-2xl font-heading font-semibold mt-6 mb-4 text-text-primary">3. Data Security</h2>
        <p>
          We take security seriously. While no online service is 100% secure, we strive to protect your information to the best of our abilities. As we do not store your diagnostic inputs persistently, the risk associated with data breaches of such information is minimized.
        </p>

        <h2 className="text-2xl font-heading font-semibold mt-6 mb-4 text-text-primary">4. Cookies</h2>
        <p>
          Clavis may use cookies for session management or to improve user experience (e.g., remembering preferences if such features are added). These are typically functional cookies and not used for tracking purposes. You can usually instruct your browser to refuse cookies from our website.
        </p>

        <h2 className="text-2xl font-heading font-semibold mt-6 mb-4 text-text-primary">5. Third-Party Services</h2>
        <p>
          We may employ third-party companies and individuals on our websites - for example, analytics providers and content partners. These third parties have access to your non-identifying information only to perform specific tasks on our behalf, and are obligated not to disclose or use it for any other purpose. [If analytics like Vercel Analytics or Plausible are used, mention them generically here].
        </p>

        <h2 className="text-2xl font-heading font-semibold mt-6 mb-4 text-text-primary">6. Links to Other Sites</h2>
        <p>
          Our Service may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party&apos;s site. We strongly advise you to review the Privacy Policy of every site you visit. We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.
        </p>

        <h2 className="text-2xl font-heading font-semibold mt-6 mb-4 text-text-primary">7. Children&apos;s Privacy</h2>
        <p>
          Clavis does not knowingly collect personally identifiable information from children under the age of 16. If you are a parent or guardian and you are aware that your child has provided us with Personal Information, please contact us.
        </p>

        <h2 className="text-2xl font-heading font-semibold mt-6 mb-4 text-text-primary">8. Changes to This Privacy Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
        </p>

        <h2 className="text-2xl font-heading font-semibold mt-6 mb-4 text-text-primary">Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us. [Contact details or link to contact page will be added here].
        </p>
        <p className="mt-6">
          Last updated: May 15, 2025
        </p>
      </div>
    </div>
  );
}
