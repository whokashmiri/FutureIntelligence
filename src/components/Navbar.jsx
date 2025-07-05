import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Make sure lucide-react is installed

const Navbar = () => {
  const { i18n, t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(nextLang);
    document.documentElement.dir = nextLang === 'ar' ? 'rtl' : 'ltr';
    setMenuOpen(false); // close menu when language is toggled
  };

  const navItems = [
    { label: t('home'), path: '/home' },
    { label: t('work'), path: '/work' },
    { label: t('services'), path: '/services' },
    { label: t('pricing'), path: '/pricing' },
    { label: t('blog'), path: '/blog' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 mt-2 p-2">
      <div className="flex justify-between items-center px-6 md:px-12 py-3 bg-white/80 backdrop-blur-md border border-gray-200 rounded-b-xl shadow-md">

        {/* Logo */}
        <Link to="/home" className="bg-red-500 border border-white/30 text-white px-8 py-4 rounded-tl-3xl rounded-lg font-semibold text-lg tracking-wide shadow">
          <h1 className="text-lg">FI & I</h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-lg font-medium text-white items-center">
          {navItems.map(({ label, path }, index) => (
            <Link
              to={path}
              key={index}
              className="relative group transition-all"
            >
              <span className="mix-blend-difference hover:opacity-90 transition">{label}</span>
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}

          {/* Contact Button */}
          <Link
            to="/contact"
            className="border mix-blend-difference hover:opacity-90 border-white/30 px-4 py-2 rounded-full hover:bg-white/20 hover:text-white transition transform hover:scale-105 duration-300 ease-in-out"
          >
            {t('contact')}
          </Link>

          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="ml-4 border border-white/30 px-3 py-1 rounded-full hover:bg-white/20 hover:text-white mix-blend-difference hover:opacity-90 transition transform hover:scale-105 duration-300 ease-in-out"
          >
            {t('toggleLanguage')}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-800 focus:outline-none"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border border-gray-200 rounded-b-xl shadow-md px-6 py-4 transition-all duration-300 ease-in-out">
          <ul className="flex flex-col space-y-4 text-gray-800 font-medium">
            {navItems.map(({ label, path }, index) => (
              <li key={index}>
                <Link
                  to={path}
                  onClick={() => setMenuOpen(false)}
                  className="block w-full"
                >
                  {label}
                </Link>
              </li>
            ))}

            <li>
              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="block w-full border border-gray-300 px-4 py-2 rounded-full text-center hover:bg-gray-100 transition"
              >
                {t('contact')}
              </Link>
            </li>

            <li>
              <button
                onClick={toggleLanguage}
                className="w-full border border-gray-300 px-4 py-2 rounded-full text-center hover:bg-gray-100 transition"
              >
                {t('toggleLanguage')}
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
