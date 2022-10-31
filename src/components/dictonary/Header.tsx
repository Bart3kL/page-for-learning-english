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
    </HeaderWrapper>
  );
};

export default Header;
