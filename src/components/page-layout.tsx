import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import Banner from './banner';

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  const location = useLocation();
  const isBearsInNumbersPage = location.pathname === '/bears-in-numbers';

  // Use a transparent background for the special page, otherwise default to white
  const backgroundClass = isBearsInNumbersPage ? 'bg-transparent' : 'bg-white';

  return (
    <div className={`min-h-screen ${backgroundClass}`}>
      <Header />
      <main>{children}</main>
      <Banner />
      <Footer />
    </div>
  );
};

export default PageLayout; 