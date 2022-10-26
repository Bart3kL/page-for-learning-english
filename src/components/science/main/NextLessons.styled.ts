import styled from 'styled-components';

export const NextLesson = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  width: 65%;
  height: 250px;
  font-size: 1.3em;
  margin-left: 5%;
  box-shadow: 8px 8px 30px -6px rgba(66, 68, 90, 1);
  h2 {
    margin: 15px 0;
  }
`;
export const Lessons = styled.div`
  display: flex;
  width: 100%;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 37%;
    margin: 0 1%;
    height: 170px;
    border: 1px solid #d9d9d9;
    span {
      border-radius: 50%;
    }
  }
`;