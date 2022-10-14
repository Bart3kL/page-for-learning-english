import React from 'react';
import Link from 'next/link';

import { NavWrapper, NavList, Logo } from './NavBar.css';

export default function Navbar() {
  return (
    <NavWrapper>
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
    </NavWrapper>
  );
}
