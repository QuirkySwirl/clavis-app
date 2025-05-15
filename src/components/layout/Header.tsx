'use client';

import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className="bg-bg-panel-dark text-text-primary p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-poppins font-bold hover:text-accent-1 transition-colors">
          Clavis <span className="text-accent-2">🔑</span>
        </Link>
        <nav>
          {/* Navigation links will go here - e.g., Blog, About, Glossary */}
          {/* For now, keeping it simple */}
          <Link href="/blog" className="hover:text-accent-1 transition-colors px-3 py-2 rounded-md text-sm font-medium">
            Blog
          </Link>
          {/* <Link href="/about" className="hover:text-accent-1 transition-colors px-3 py-2 rounded-md text-sm font-medium">
            About
          </Link>
          <Link href="/glossary" className="hover:text-accent-1 transition-colors px-3 py-2 rounded-md text-sm font-medium">
            Glossary
          </Link> */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
