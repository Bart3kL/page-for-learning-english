import styled from 'styled-components';

export const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 10px;
  margin-left: -70px;
  border-left: 8px solid #27ae60;
`;
export const TextList = styled.ul`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;

  li:nth-child(1) div::before {
    animation: color-change 1s forwards;
  }
  li:nth-child(2) div::before {
    animation: color-change 2s forwards;
  }
  li:nth-child(3) div::before {
    animation: color-change 3s forwards;
  }
  @keyframes color-change {
    0% {
      width: 0%;
    }
    100% {
      width: 100%;
    }
  }
`;
export const TextItem = styled.li`
  position: relative;
  list-style: none;

  div {
    position: relative;
    font-size: 4rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: transparent;
    -webkit-text-stroke: 1px rgba(255, 255, 255, 0.5);
  }
  div::before {
    content: attr(data-text);
    position: absolute;
    color: #fff;
    width: 0;
    overflow: hidden;
    transition: 1s;
  }
`;
