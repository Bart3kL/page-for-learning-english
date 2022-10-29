import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSession, signOut } from 'next-auth/react';
import axios from 'axios';
import { useRouter } from 'next/router';
import {
  MainPageWrapper,
  OtherPagesWrapper,
  NavList,
  Logo,
  ProfileWrapper,
  ImageWrapper,
  ProfileName,
  LogoutWrapper,
} from './NavBar.styled';

import { icons } from '../../lib/Icons';
import useUserProgress from '../../lib/axios/usePostUserProgress';
async function fetchLessons() {
  const { data } = await axios.get('http://localhost:3000/api/check-user');

  return data;
}
export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const session = useSession();
  const router = useRouter();
  const fetchLessonStep = useUserProgress();
  const { MdOutlineKeyboardArrowDown } = icons;

  const handleLogout = async () => {
    await signOut();
  };
  const { data }:any = useSession();

  const handleUserProgress = async () => {
    const users = await fetchLessons();
    const foundAccount = users.some((user:any) => user.id === data?.user.id);
    console.log(foundAccount);
    if (!foundAccount) {
      fetchLessonStep('1', '1');
    }
  };
  return (
    <>
      {router.pathname === '/' ? (
        <MainPageWrapper>
          <NavList>
            <Logo>
              <Link href="/">Edudor</Link>
            </Logo>
            <li onClick={handleUserProgress}>
              <Link href="/science">Nauka</Link>
            </li>
            <li>
              <Link href="/dictionary">Słownik</Link>
            </li>
            <li>
              <Link href="/phrases">Zwroty</Link>
            </li>
            <li>
              <Link href="/ranking">Ranking</Link>
            </li>
            <li>
              <Link href="/contact">Kontakt</Link>
            </li>
          </NavList>
        </MainPageWrapper>
      ) : (
        <OtherPagesWrapper>
          <NavList>
            <Logo>
              <Link href="/">Edudor</Link>
            </Logo>
            <li>
              <Link href="/science">Nauka</Link>
            </li>
            <li>
              <Link href="/dictionary">Słownik</Link>
            </li>
            <li>
              <Link href="/phrases">Zwroty</Link>
            </li>
            <li>
              <Link href="/ranking">Ranking</Link>
            </li>
            <li>
              <Link href="/contact">Kontakt</Link>
            </li>
          </NavList>
          {session.status === 'authenticated' && (
            <ProfileWrapper>
              <ImageWrapper>
                <Image
                  src={`${session.data?.user?.image}`}
                  alt="Picture of the author"
                  width={50}
                  height={50}
                />
              </ImageWrapper>
              <ProfileName onClick={() => setToggle((prev) => !prev)}>
                <div>{session.data?.user?.name}</div>
                <MdOutlineKeyboardArrowDown />
              </ProfileName>
              {toggle && (
                <LogoutWrapper>
                  <button onClick={() => handleLogout()}>Wyloguj</button>
                  <button onClick={() => handleLogout()}>Edytuj profil</button>
                </LogoutWrapper>
              )}
            </ProfileWrapper>
          )}
        </OtherPagesWrapper>
      )}
    </>
  );
}
