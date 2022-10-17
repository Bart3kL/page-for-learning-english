import styled from 'styled-components';

export const HomePageWrapper = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  margin-top: -15vh;
  background-image: url('../background.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;
export const LoginButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  margin-left: 15%;
  button:hover {
    cursor: pointer;
    transition: background-color 0.3s;
  }

  button:nth-child(2):hover {
    background-color: #CCCCCC;
  }
  button:nth-child(3) {
    background-color: #3c5999;
    color: white;
  }
  button:nth-child(3):hover {
    background-color: #4161a6;
  }
  button:nth-child(4) {
    background-color: black;
    color: white;
  }
  button:nth-child(4):hover {
    background-color: #081F1F;
  }
`;

export const LoginBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  height: 50px;
  padding: 0;
  min-width: 331px;
  font-size: 1.1rem;
  border: 0;
  border-radius: 10px;
  div {
    width: 20%;
    margin-right: 10%;
    font-size: 2rem;
  }
  p {
    text-align: left;
    width: 70%;
  }
`;
