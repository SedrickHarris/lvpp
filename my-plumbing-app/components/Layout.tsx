import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Breadcrumbs from './Breadcrumbs';

interface LayoutProps {
  children: React.ReactNode;
  breadcrumbs?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children, breadcrumbs }) => {
  return (
    <div>
      <Header />
      {breadcrumbs && <Breadcrumbs>{breadcrumbs}</Breadcrumbs>}
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;