import styled from 'styled-components';


export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 75vh;

  li {
    display: flex;
    justify-content: right;
    align-items: flex-end;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin: 20px;
    width: 250px;
    height: 250px;
    cursor: pointer;

    button {
      margin: 10px;
      border: 0;
      color: white;
      background-color: #19733f;
      padding: 10px 30px;
      transition: 0.3s;
    }
    :hover button {
      background-color: #2dcf71;
    }
  }
`;
export const List = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  flex-wrap: wrap;
  width: 60%;
  margin: 0;
`;
