'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { FiMenu, FiX, FiKey } from 'react-icons/fi'; // FiKey for logo

const Header = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Clavis' },
    { href: '/who-is-it-for', label: 'Who Is It For?' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
    // Future: { href: '/glossary', label: 'Glossary' },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <header className="sticky top-0 z-50 bg-bg-deep-dark/80 backdrop-blur-md border-b border-glass-border shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2 text-2xl font-heading font-bold text-accent-1 hover:text-accent-1/80 transition-colors" data-spotlight-hover="true">
              <FiKey className="text-accent-2 h-6 w-6" />
              <span>Clavis</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-2 lg:space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors
                  ${isActive(link.href) 
                    ? 'bg-glass-bg text-accent-1 shadow-md' 
                    : 'text-text-secondary hover:text-text-primary hover:bg-glass-bg/70'
                  }` }
                data-spotlight-hover={!isActive(link.href)} 
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-text-primary hover:text-accent-1 hover:bg-glass-bg focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent-1"
              aria-expanded={isMobileMenuOpen ? "true" : "false"}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <FiX className="block h-6 w-6" /> : <FiMenu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 inset-x-0 z-40 transform shadow-lg origin-top">
          <div className="rounded-lg bg-bg-panel-dark ring-1 ring-black ring-opacity-5 overflow-hidden border-t border-glass-border">
            <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors
                    ${isActive(link.href) 
                      ? 'bg-glass-bg text-accent-1' 
                      : 'text-text-secondary hover:text-text-primary hover:bg-glass-bg/70'
                    }` }
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
