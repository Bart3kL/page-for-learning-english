import styled from 'styled-components';

export const NoAccessWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-left: -270px;
  color: white;
  background-color: black;
  opacity: 0.8;
  h2 {
    font-size: 5rem;
  }
  p {
    text-align: center;
    font-size: 2rem;
    width: 60%;
  }
`;
export const BackDrop = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  margin-top: 10vh;
`;
