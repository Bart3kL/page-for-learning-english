import React from 'react';
import { ReactNode, FC } from 'react';
import ScienceNav from '../nav/ScienceNav';
import { SciencePageWrapper, PageContent } from './ScienceLayout.css';
type Props = { children: ReactNode };

const ScienceLayout: FC<Props> = ({ children }) => {
  return (
    <SciencePageWrapper>
      <ScienceNav />
      <PageContent>{children}</PageContent>
    </SciencePageWrapper>
  );
};

export default ScienceLayout;
