import styled from 'styled-components';

export const MainPageWrapper = styled.nav`
  position: relative;
  display: flex;
  height: 15vh;
  align-items: center;
  z-index: 1;
`;
export const OtherPagesWrapper = styled.nav`
  display: flex;
  height: 10vh;
  background-color: #1f2233;
  align-items: center;
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
export const ProfileWrapper = styled.div`
  display: flex;
  height: 10vh;
  width: 20%;
  justify-content: right;
  align-items: center;
`;
export const ImageWrapper = styled.div`
  span {
    border-radius: 50%;
  }
`;
export const ProfileName = styled.div`
  display: flex;
  margin: 0 30px;
  font-size: 1.5rem;
  color: white;
  cursor: pointer;

`;
export const LogoutWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  margin-top: 150px;
  margin-right: 1%;
  width: 130px;
  padding: 10px 30px;
  background-color: #2a336b;
  border-radius: 10px;
  height: 80px;
  button {
    background-color: transparent;
    border: 1px solid white;
    width: 90%;
    margin: 5px 0;
    color: white;
    padding: 5px;
    transition: 0.3s;
    cursor: pointer;
  }
  button:hover {
    background-color: #1f2233;
  }
`;
