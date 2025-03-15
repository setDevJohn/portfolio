import { sizes } from '@styles/mediaSizes';
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

export const LayoutContainer = styled.div`
  display: flex;
  box-shadow: 0 0 19px #0003;
  margin: 0 auto;
  max-width: 1900px;
  width: 100%;
  height: 100vh;
`;

export const ContentContainer = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 25px 25px 15px 25px;
  overflow: auto;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.primaryColor};

  @media (${sizes.mobile}) {
    padding: 15px 0;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100% ;
  height: 38px;
`;

export const PageTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 500;
  width: fit-content;
  animation: ${slideIn} 0.6s ease forwards;
  margin-left: 30px;

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