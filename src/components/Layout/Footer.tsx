import React from 'react';
import Link from 'next/link';
import Logo from '../Logo';

const Footer = () => (
  <footer className="bg-neutral-900 text-white py-16 px-6">
    <div className="flex flex-wrap gap-5 justify-between w-full max-w-7xl mx-auto">
      <div className="flex gap-4 items-center">
        <Logo />
        <div className="text-2xl font-semibold">SolRate</div>
      </div>
      <nav className="flex flex-wrap gap-8 items-center text-sm font-medium text-zinc-400">
        <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
        <Link href="/terms" className="hover:text-white">Term & Conditions</Link>
        <Link href="/about" className="hover:text-white">About Us</Link>
        <Link href="/contact" className="hover:text-white">Contact</Link>
      </nav>
    </div>
    <div className="mt-8 border-t border-zinc-800 pt-8 flex justify-between items-center max-w-7xl mx-auto">
      <div className="text-sm font-medium text-neutral-400">© 2024 All Rights Reserved.</div>
      <div className="flex gap-4">
        {['instagram', 'linkedin', 'facebook', 'twitter'].map((social) => (
          <Link key={social} href="#" className="text-neutral-400 hover:text-white">
            <span className="sr-only">{social}</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
            </svg>
          </Link>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;