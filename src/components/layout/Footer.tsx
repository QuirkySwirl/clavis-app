'use client';

import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-bg-panel-dark text-text-tertiary p-4 text-center text-sm">
      <div className="container mx-auto">
        <p>&copy; {currentYear} Clavis by Kartik Iyer. All rights reserved.</p>
        <p className="mt-1">
          Built with Human Insight & AI Power.
        </p>
        {/* Optional: Add links to privacy policy, terms, etc. later */}
      </div>
    </footer>
  );
};

export default Footer;
