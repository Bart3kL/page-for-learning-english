import styled from 'styled-components';

export const VocabluaryWrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
`;
export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  height: 400px;
  padding: 20px;
  border-radius: 5px;
  border: 2px solid #676767;
`;
export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
  height: 50%;
  border-bottom: 1px solid #27293d;

  p:nth-child(1) {
    color: #27293d;
    font-size: 3rem;
    font-weight: bold;
    margin: 0;
  }
  p:nth-child(2) {
    color: #27293d;
    font-size: 1.5rem;
    font-style: italic;
    padding-bottom: 5px;
    border-bottom: 2px solid #27293d;
    font-weight: 500;
  }
`;
export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 20%;
  button {
    padding: 15px 35px;
    margin: 0 5px;
    font-weight: 600;
    color: white;
    border-radius: 10px;
    border: 0;
    cursor: pointer;
    transition: 0.3s;
  }
  button:nth-child(1) {
    background-color: #313347;
  }
  button:nth-child(1):hover {
    border: 1px solid #313347;
    background-color: #ffff;
    color: #313347;
  }
  button:nth-child(2) {
    background-color: #424458;
  }
  button:nth-child(2):hover {
    border: 1px solid #424458;
    background-color: #ffff;
    color: #424458;
  }
`;
export const SoundWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 4rem;
  color: #98cff9;
  height: 20%;
  svg {
    transition: 0.3s;
  }
  svg:hover {
    color: #27ae60;
  }
  cursor: pointer;
`;
