import React from 'react';
import { ReactNode, FC } from 'react';

import ScienceNav from '../navs/ScienceNav';
import { SciencePageWrapper, PageContent } from './ScienceLayout.styled';
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
