import React from 'react';
import { Button } from '@/components/ui/Button'; // Assuming you have a Button component

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-heading font-bold mb-8 text-text-primary text-center">
        Get in Touch
      </h1>
      <p className="text-lg text-text-secondary mb-12 text-center max-w-2xl mx-auto">
        Have questions about Clavis, data quality, or want to discuss a potential project? We&apos;d love to hear from you.
      </p>

      <div className="max-w-lg mx-auto bg-glass-bg border border-glass-border rounded-lg p-8 shadow-xl">
        <form 
          action="https://formspree.io/f/yourFormspreeID" // Replace with your Formspree endpoint ID
          method="POST"
        >
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="w-full px-4 py-2 bg-bg-deep-dark border border-glass-border rounded-md text-text-primary focus:ring-accent-blue-light focus:border-accent-blue-light placeholder-text-tertiary"
              placeholder="e.g., Jane Doe"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="w-full px-4 py-2 bg-bg-deep-dark border border-glass-border rounded-md text-text-primary focus:ring-accent-blue-light focus:border-accent-blue-light placeholder-text-tertiary"
              placeholder="you@example.com"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="subject" className="block text-sm font-medium text-text-secondary mb-1">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              required
              className="w-full px-4 py-2 bg-bg-deep-dark border border-glass-border rounded-md text-text-primary focus:ring-accent-blue-light focus:border-accent-blue-light placeholder-text-tertiary"
              placeholder="Regarding Clavis..."
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-1">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              required
              rows={5}
              className="w-full px-4 py-2 bg-bg-deep-dark border border-glass-border rounded-md text-text-primary focus:ring-accent-blue-light focus:border-accent-blue-light placeholder-text-tertiary"
              placeholder="Your message here..."
            ></textarea>
          </div>
          
          {/* Optional: Add a honeypot field for spam prevention if using Formspree */}
          <input type="text" name="_gotcha" style={{ display: 'none' }} aria-label="Don&apos;t fill this out if you&apos;re human" />

          <div className="text-center">
            <Button type="submit" variant="default" size="lg" className="bg-gradient-to-r from-accent-2 to-accent-3 hover:from-accent-2/90 hover:to-accent-3/90 text-white">
              Send Message
            </Button>
          </div>
        </form>
        <p className="text-xs text-text-tertiary mt-6 text-center">
          Alternatively, you can reach out directly via email at [your-email@example.com] or connect on [LinkedIn/Twitter link].
        </p>
      </div>
    </div>
  );
}
