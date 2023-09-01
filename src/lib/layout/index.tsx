import { css } from 'styled-system/css';
import { ThemeProvider } from '~/lib/components/theme-provider';

import { wrapperClassname } from './constants';
import Footer from './Footer';
import Header from './Header';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div
        className={css({
          display: 'flex',
          minHeight: 'screen',
          flexDirection: 'column',
        })}
      >
        <Header />
        <main className={wrapperClassname}>{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Layout;
