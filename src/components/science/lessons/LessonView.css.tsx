import styled from 'styled-components';

export const SingleLessonWrapper = styled.div`
  display: flex;
  width: 400px;
  height: 150px;
  box-shadow: 8px 8px 30px -6px rgba(66, 68, 90, 1);
  margin: 10px 20px;
  transition: 0.3s;
  background-repeat: no-repeat;
  background-position: 0 0, 100% 0, 100% 100%, 0 100%;

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
export const ImageWrapper = styled.div`
  display: flex;
  width: 40%;
  align-items: center;
  justify-content: center;
  img {
    border-radius: 50%;
  }
`;
export const LessonDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
`;
export const LessonTitle = styled.p`
  display: flex;
  font-size: 1.5rem;
  height: 50%;
  align-items: flex-end;
  font-weight: 500;
  margin: 0;
`;
export const LessonCategories = styled.p`
  display: flex;
  align-items: center;
  font-style: italic;
  height: 50%;
  margin: 0;
`;
