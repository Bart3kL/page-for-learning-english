import React from 'react';
import { ReactNode, FC } from 'react';
import Navbar from '../navs/NavBar';
import { GlobalStyles } from '../../styles/GlobalStyles.styled';

// NIE CSS TYLKO .styled
import { GlobalWrapper } from './Layout.styled';

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
