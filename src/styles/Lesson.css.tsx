import styled from 'styled-components';

export const LessonCategory = styled.section`
  display: flex;
  height: 100px;
  width: 450px;
  align-items: center;
  margin: 15px;
  margin-top: 50px;
  padding: 15px;
  box-shadow: 8px 8px 21px 2px rgba(66, 68, 90, 1);
  transition: 0.3s;
  background-repeat: no-repeat;
  background-position: 0 0, 100% 0, 100% 100%, 0 100%;
  p:nth-child(1) {
    display: flex;
    width: 30%;
    justify-content: center;
    font-size: 2rem;
    font-weight: 500;
  }
  p:nth-child(2) {
    display: flex;
    width: 55%;
    justify-content: center;
    color: 676767;
    font-style: italic;
    font-size: 1.1rem;
  }
  svg {
    width: 15%;
    font-size: 3.5rem;
  }
  :hover > svg {
    color: #27ae60;
  }
  :hover {
    background-image: linear-gradient(to right, #27ae60 100%, #27ae60 100%),
      linear-gradient(to bottom, #27ae60 100%, #27ae60 100%),
      linear-gradient(to right, #27ae60 100%, #27ae60 100%),
      linear-gradient(to bottom, #27ae60 100%, #27ae60 100%);
    background-size: 100% 3px, 3px 100%, 100% 3px, 3px 100%;
    animation: bg 1.25s cubic-bezier(0.19, 1, 0.22, 1) 1;
    cursor: pointer;
  }

  @keyframes bg {
    0% {
      background-size: 0 3px, 3px 0, 0 3px, 3px 0;
    }
    25% {
      background-size: 100% 3px, 3px 0, 0 3px, 3px 0;
    }
    50% {
      background-size: 100% 3px, 3px 100%, 0 3px, 3px 0;
    }
    75% {
      background-size: 100% 3px, 3px 100%, 100% 3px, 3px 0;
    }
    100% {
      background-size: 100% 3px, 3px 100%, 100% 3px, 3px 100%;
    }
  }
`;
export const LessonsWrapper = styled.main`
  display: flex;
  height: 80vh;
`;
export const CategoriesWrapper = styled.section`
  display: flex;
  width: 50%;
  flex-direction: column;
`;
export const ImageWrapper = styled.section`
  display: flex;

  box-sizing: border-box;
  width: 50%;
  justify-content: center;
  align-items: flex-start;
  min-width: 550px;
  span {
    border-radius: 50%;
  }
`;
