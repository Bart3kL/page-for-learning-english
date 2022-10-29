import styled from 'styled-components';
export const WordsWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  min-height: 75vh;
`;

export const WordList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
`;
export const AddToRepetitions = styled.p`
  display: flex;
  margin: 0;
  /* width: 30%; */
  div {
    display: flex;
    align-items: flex-start;
    justify-content: right;
    background-color: #2a336b;
  }
  svg {
    color: white;
    font-size: 3rem;
    cursor: pointer;
    transition: 0.3s;
  }
  svg:hover {
    color: #27ae60;
  }
`;
export const Sentences = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #2a336b;
  box-shadow: 8px 8px 30px -6px rgba(66, 68, 90, 1);
  width: 100%;
  height: 100%;
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-wrap: wrap;
    width: 100%;
    height: 40%;
    padding: 0;
    margin: 0;
  }
  button {
    transition: 0.3s;
    color: white;
    border-radius: 25px;
    padding: 10px 20px;
    background-color: #2a336b;
  }
  button:hover {
    cursor: pointer;
    background-color: #3a447c;
    padding: 10px 20px;
  }
`;
export const WordItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 400px;
  min-width: 300px;
  margin: 20px;
  div {
    display: flex;
    justify-content: right;
    align-items: flex-start;
    width: 100%;
    height: 70%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  div:nth-child(2) {
    display: flex;
    width: 100%;
    flex-direction: column;
    color: #2a336b;
    align-items: center;
    justify-content: center;
    box-shadow: 8px 8px 30px -6px rgba(66, 68, 90, 1);
    span {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 80%;
      background-color: transparent;
      box-shadow: 0;
      svg {
        font-size: 3rem;
        transition: 0.3s;
        color: #27ae60;
      }
      svg:hover {
        cursor: pointer;
        color: #19733f;
      }
      button {
        transition: 0.3s;
        color: white;
        border-radius: 25px;
        padding: 10px 20px;
        background-color: #2a336b;
        border: 0;
      }
      button:hover {
        cursor: pointer;
        background-color: #3a447c;
        padding: 10px 20px;
      }
    }
    p {
      display: flex;
      width: 100%;
      justify-content: center;
      align-items: center;
      text-transform: uppercase;
      margin: 10px 0;
      font-weight: bold;
      font-size: 2rem;
      padding: 0;
    }
    p:nth-child(2) {
      text-transform: lowercase;
      font-weight: 500;
      font-size: 1.5rem;
      padding-bottom: 10px;
      border-bottom: 1px solid #2a336b;
    }
  }
`;
