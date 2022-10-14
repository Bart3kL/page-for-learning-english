import type { NextPage } from 'next';
// import Head from 'next/head';
import { useSession, signIn } from 'next-auth/react';

const Home: NextPage = () => {
  const handleGoogleLogin = async (e:any) => {
    e.preventDefault();
    await signIn('google');
  };

  return (
    <div>
      <button onClick={handleGoogleLogin}>Google</button>
    </div>
  );
};

export default Home;
