import type { NextPage } from 'next';
import { signIn } from 'next-auth/react';

import AnimatedText from '../components/animations/AnimatedText';
import { icons } from '../lib/Icons';
import {
  HomePageWrapper,
  LoginButtonsWrapper,
  LoginBtn,
} from '../styles/HomePage.css';
import useUserProgress from '../lib/axios/usePostUserProgress';

const Home: NextPage = () => {
  const fetchLessonStep = useUserProgress();

  const { FcGoogle, RiFacebookFill, GoMarkGithub } = icons;

  const handleLogin = async () => {
    fetchLessonStep('1', '1');
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
