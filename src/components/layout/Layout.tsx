import React from 'react';
import { ReactNode, FC } from 'react';
import Navbar from '../nav/NavBar';
import { GlobalStyles } from '../../styles/GlobalStyles.css';
import { GlobalWrapper } from './Layout.css';

type Props = { children: ReactNode };

const Layout: FC<Props> = ({ children }) => {
  return (
    <GlobalWrapper>
      <GlobalStyles />
      <Navbar />
      {children}
    </GlobalWrapper>
  );
};

export default Layout;
