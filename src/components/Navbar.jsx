import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { i18n, t } = useTranslation();

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(nextLang);
    document.documentElement.dir = nextLang === 'ar' ? 'rtl' : 'ltr';
  };

  const navItems = [
      { label: t('home'), path: '/home' },
    { label: t('work'), path: '/work' },
    { label: t('services'), path: '/services' },
    { label: t('pricing'), path: '/pricing' },
    { label: t('blog'), path: '/blog' },
  ];

  return (
    <header className="fixed top-0 mt-2 p-2 left-0 w-full z-50">
      <div className="flex justify-between items-center px-6 md:px-12 py-3 bg-white/10 backdrop-blur-md rounded-b-xl shadow-sm">
        
        {/* Logo */}
        <div className="bg-red-500 border border-white/30 text-white px-8 py-4 rounded-tl-3xl rounded-lg font-semibold text-lg tracking-wide shadow">
          <h1 className="text-lg">FI & I</h1>
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex space-x-8 text-lg font-medium text-white items-center">
          {navItems.map(({ label, path }, index) => (
            <Link
              to={path}
              key={index}
              className="relative group transition-all"
            >
              <span className="hover:text-white/90">{label}</span>
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}

          {/* Contact Button */}
          <Link
            to="/contact"
            className="border border-white/30 px-4 py-2 rounded-full hover:bg-white/20 hover:text-white transition transform hover:scale-105 duration-300 ease-in-out"
          >
            {t('contact')}
          </Link>

          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="ml-4 border border-white/30 px-3 py-1 rounded-full hover:bg-white/20 hover:text-white transition transform hover:scale-105 duration-300 ease-in-out"
          >
            {t('toggleLanguage')}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
