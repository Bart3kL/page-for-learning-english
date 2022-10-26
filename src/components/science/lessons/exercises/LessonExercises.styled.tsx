import styled from 'styled-components';

export const ExercisesWrapper = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 70vh;
`;
export const Exercise = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid black;
  width: 80%;
  height: 400px;
`;
export const OptionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 50px;
  font-size: 1.3rem;
  input {
    margin: 0 5px 0 0;
  }
`;
export const Message = styled.div`
  display: flex;
  font-size: 1.3rem;
  margin: 5px 0;
  height: 45px;
`;
export const Options = styled.div`
  display: flex;
`;
export const ButtonToNextLesson = styled.button`
  padding: 20px 60px;
  background-color: #27ae60;
  border: 0;
  font-size: 1.5rem;
  transition: 0.3s;
  cursor: pointer;
  a {
    text-decoration: none;
    color: white;
    transition: 0.3s;
  }
  :hover {
    background-color: #2af27d;
    a {
      color: #1d1f68;
    }
  }
`;
export const ButtonWrapper = styled.div`
  display: flex;
  margin: 20px 0;
  button {
    margin: 0 10px;
    padding: 10px 25px;
    border: 0;
    cursor: pointer;
    transition: 0.3s;
  }
  button:nth-child(1) {
    background-color: #27293d;
    color: white;
  }
  button:nth-child(1):hover {
    background-color: #484bb0;
    color: white;
  }
  button:nth-child(2) {
    color: white;
    background-color: #27ae60;
  }
  button:nth-child(2):hover {
    background-color: #2af27d;
    color: #1d1f68;
  }
`;
