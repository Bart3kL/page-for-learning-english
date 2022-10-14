import type { NextPage } from 'next';
import { useSession, signIn, signOut } from 'next-auth/react';
import { FcGoogle } from 'react-icons/fc';
import { RiFacebookFill } from 'react-icons/ri';
import { GoMarkGithub } from 'react-icons/go';

import {
  HomePageWrapper,
  LoginButtonsWrapper,
  HeaderInfo,
  LoginBtn,
} from '../styles/HomePage.css';

const Home: NextPage = () => {
  const handleLogin = async () => {
    await signIn();
  };
  const handleGoogleLogout = async (e: any) => {
    await signOut();
  };
  const session = useSession();
  console.log(session);

  return (
    <HomePageWrapper>
      {/* <button onClick={handleGoogleLogout}>logout</button> */}
      <LoginButtonsWrapper>
        <HeaderInfo>Aby się zalogować wybierz jedną z opcji</HeaderInfo>
        <LoginBtn onClick={() => handleLogin()}>
          <div>
            <FcGoogle />
          </div>
          <p>Zaloguj się przez Google</p>
        </LoginBtn>
        <LoginBtn onClick={() => handleLogin()}>
          <div>
            <RiFacebookFill />
          </div>
          <p>Zaloguj się przez Facebook</p>
        </LoginBtn>
        <LoginBtn onClick={() => handleLogin()}>
          <div>
            <GoMarkGithub />
          </div>
          <p>Zaloguj się przez GitHub</p>
        </LoginBtn>
      </LoginButtonsWrapper>
    </HomePageWrapper>
  );
};

export default Home;
