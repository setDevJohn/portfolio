import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  0% {
    transform: translateX(-50%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;
const widthTitle = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.mainColor};
  margin: 0 auto;
  width: 100%;
  height: 100vh;
`;

export const ContentContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 120px;
  flex: 1;
  height: 100%;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100% ;
  height: 38px;
`;

export const PageTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 500;
  overflow: hidden;
  width: fit-content;
  animation: ${slideIn} 0.6s ease forwards;

  &::after {
    content: '';
    display: block;
    height: 3px;
    background-color: ${({ theme }) => theme.contrastColor};
    margin-top: 5px;
    border-radius: 4px;
    width: 0;
    animation: ${widthTitle} 1.3s ease forwards;
  }
`;