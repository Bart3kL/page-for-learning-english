import type { NextPage } from 'next';
import { signIn } from 'next-auth/react';

import AnimatedText from '../components/animations/AnimatedText';
import { icons } from '../lib/Icons';
import {
  HomePageWrapper,
  LoginButtonsWrapper,
  LoginBtn,
} from '../components/PageSpecific/Home/HomePage.styled';

const Home: NextPage = () => {
  const { FcGoogle, RiFacebookFill, GoMarkGithub } = icons;

  const handleLogin = async () => {
    await signIn();
  };
  return (
    <HomePageWrapper>
      <LoginButtonsWrapper>
        <AnimatedText />
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
