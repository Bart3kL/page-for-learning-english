import styled from 'styled-components';
export const RepetitionsWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
  margin-left: 50px;
  min-height: 65vh;
  h3 {
    font-size: 2rem;
  }
  textarea {
    display: flex;
    box-sizing: border-box;
    width: 40%;
    height: 200px;
    border: 0;
    padding: 0;
    font-size: 1.2rem;
    font-weight: bold;
    min-width: 480px;
    padding: 20px;
    margin-top: 50px;
    outline: none;
    resize: none;
    box-shadow: 8px 8px 21px 2px rgba(66, 68, 90, 1);
  }
`;
