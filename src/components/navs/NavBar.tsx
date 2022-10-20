import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import updateUser from 'next-auth';
import { useSession, signOut, getCsrfToken } from 'next-auth/react';
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
} from './NavBar.css';
import { icons } from '../../lib/Icons';
export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const session = useSession();
  const router = useRouter();

  const { MdOutlineKeyboardArrowDown } = icons;

  const handleLogout = async () => {
    await signOut();
  };
  return (
    <>
      {router.pathname === '/' ? (
        <MainPageWrapper>
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
          {session.status !== 'unauthenticated' && (
            <ProfileWrapper>
              <ImageWrapper>
                <Image
                  src={session.data?.user?.image}
                  alt="Picture of the author"
                  width={70}
                  height={70}
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
