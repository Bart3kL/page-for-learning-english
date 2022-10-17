import React from 'react';
import { useSession } from 'next-auth/react';

import ScienceLayout from '../../components/layout/ScienceLayout';
import NoAccess from '../../components/Errors/NoAccess';
const SciencePage = () => {
  const { data: session } = useSession();

  if (!session) {
    return <NoAccess></NoAccess>;
  }
  return <ScienceLayout>asdas</ScienceLayout>;
};

export default SciencePage;
