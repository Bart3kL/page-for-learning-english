import styled from 'styled-components';

export const ContentWrapper = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 65vh;
  div {
    display: flex;
  }
`;
export const WelcomeMessage = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 250px;
  padding: 20px;
  font-size: 1.3rem;
  box-shadow: 8px 8px 30px -6px rgba(66, 68, 90, 1);
  h2 {
    color: #27293d;
  }
  p {
    color: #676767;
    font-style: italic;
    font-size: 1rem;
  }
`;

export const ProgressBarWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 100px;
  flex-direction: column;
  justify-content: flex-start;
  height: 40vh;
  width: 100%;
  p {
    font-size: 2rem;
    font-weight: 500;
    font-style: italic;
  }
  h3 {
    font-size: 2rem;
  }
`;
export const ProgressBar = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  width: 90%;
  height: 50px;
  border: 1px solid #d9d9d9;
  border-radius: 25px;
  z-index: 10;
  div {
    display: flex;
    height: 100%;
    line-height: 50px;
    justify-content: center;
    border-left: 1px solid white;
    align-content: center;
    flex-grow: 1;
    color:#081f1f;
    font-weight: 600;
  }
  div:first-child {
    border-radius: 25px 0 0 25px;
  }
  div:last-child {
    border-radius: 0 25px 25px 0;
  }
`;
