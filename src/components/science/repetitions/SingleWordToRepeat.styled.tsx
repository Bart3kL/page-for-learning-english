import styled from 'styled-components';
export const WordToTranslate = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 40%;
  min-width: 480px;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 20px;
  height: 200px;
  box-shadow: 8px 8px 21px 2px rgba(66, 68, 90, 1);
`;
export const Message = styled.div`
position: absolute;
margin-top: 200px;
margin-left: 30px;
color: #27ae60 ;
font-size: 1.5rem;
font-weight: bold;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  width: 40%;
  min-width: 480px;
  div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin: 0 20px;
    button {
      color: #7a81cb;
      padding: 10px 20px;
      border-radius: 10px;
      border: 1px solid #7a81cb;
      transition: 0.3s;
      cursor: pointer;
    }
    button:disabled {
      cursor: not-allowed;
      background-color: #cccccc;
    }
    button:hover {
      background-color: #7a81cb;
      color: white;
    }
    p {
      font-style: italic;
      font-size: 0.8rem;
    }
  }
`;
