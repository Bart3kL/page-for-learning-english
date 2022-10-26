import styled from 'styled-components';

export const ScienceNavWrapper = styled.nav`
  display: flex;
  min-width: 270px;
  height: 90vh;
  flex-direction: column;
  background-color: #27293d;
`;
export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 0;

  div:hover {
    background-color: white;
    border-right: 3px solid #27293d;
    color: #27293d;
    cursor: pointer;
    p {
      border-color: #27293d;
    }
  }
`;
export const ListItemWrapper = styled.div`
  display: flex;
  height: 70px;
  flex-basis: 100%;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  color: white;
  font-size: 1.3rem;
  border-top: 3px solid white;
  transition: 0.5s;
  span {
    display: flex;
    justify-content: center;
    width: 30%;
    font-size: 2.2rem;
  }
  p {
    width: 70%;
    padding: 0;
    margin: 0;
    padding-left: 5%;
    border-left: 3px solid white;
  }
`;
