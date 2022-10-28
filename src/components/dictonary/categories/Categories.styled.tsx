import styled from 'styled-components';
export const List = styled.ul`
  display: flex;
  justify-content: center;
  margin-top: 100px;
  list-style: none;
  flex-wrap: wrap;
  width: 80%;
  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 30px;
    box-shadow: 8px 8px 30px -6px rgba(66, 68, 90, 1);
    border-radius: 10px;
    h3 {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      height: 30%;
      font-size: 1.6rem;
      width: 100%;
      border: 1px solid black;
      margin: 0;
    }
    div {
      width: 100%;
      height: 70%;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
`;
