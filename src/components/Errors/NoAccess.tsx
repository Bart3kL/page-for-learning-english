import React from 'react';
import { NoAccessWrapper, BackDrop } from './NoAccess.css';
import ScienceNav from '../navs/ScienceNav';

const NoAccess = () => {
  return (
    <BackDrop>
      <ScienceNav />
      <NoAccessWrapper>
        <h2>Zaloguj sie!</h2>
        <p>Musisz być zalogowany aby korzystać z tej strony</p>
      </NoAccessWrapper>
    </BackDrop>
  );
};

export default NoAccess;
