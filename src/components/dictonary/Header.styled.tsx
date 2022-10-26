import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  background-color: #dee2e3;
  padding: 20px;
  height: 10vh;
`;
export const Title = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  margin-left: 20%;
  h2 {
    color: #27293d;
  }
  p {
    color: #777777;
    margin: 0;
  }
`;
export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  width: 30%;
  margin-left: 20%;
  color: white;
  input {
    height: 40px;
    border: 0;
    padding-left: 5%;
    color: #777777;
    outline-color: #777777;
    background-color: #d4d8d9;
  }
  button {
    color: white;
    margin-left: 10%;
    padding: 10px 20px;
    border: 0;
    background-color: #27ae60;
    transition: 0.3s;
  }
  button:hover {
    cursor: pointer;
    background-color: #19733f;
  }
`;
