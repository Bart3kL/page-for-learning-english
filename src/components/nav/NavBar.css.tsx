import styled from 'styled-components';

export const NavWrapper = styled.nav`
  position: relative;
  display: flex;
  height: 15vh;
  align-items: center;
  z-index: 1;
`;
export const Logo = styled.li`
  display: flex;
  justify-content: center;
  flex-basis: 50%;
  font-weight: 600;
  a {
    font-size: 3rem;
  }
  a:hover {
    color: #19733f;
  }
`;
export const NavList = styled.ul`
  display: flex;
  flex-basis: 80%;
  list-style: none;
  margin: 0;
  padding: 0;
  li {
    display: flex;
    width: 15%;
    justify-content: center;
    align-items: center;
    font-size: 1.6rem;
    a {
      color: white;
      text-decoration: none;
      transition: color 0.3s;
    }
    a:hover {
      color: #27ae60;
    }
  }
`;
