import React from 'react';
import { HeaderWrapper, Title, SearchBar } from './Header.styled';

const Header = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <HeaderWrapper>
      <Title>
        <h2>{title}</h2>
        <p>{description}</p>
      </Title>
      <SearchBar>
        <input type="text" placeholder="Wpisz szukane slowo" />
        <button>Szukaj</button>
      </SearchBar>
    </HeaderWrapper>
  );
};

export default Header;
