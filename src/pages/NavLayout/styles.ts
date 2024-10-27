import styled from 'styled-components';
import bgImage from '@assets/images/bg-image.jpg';

export const Container = styled.div`
  position: relative;
  z-index: 0;
  display: flex;
  flex-direction: column;
  max-width: 1900px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
`;

export const BackgroundBlur = styled.div`
  z-index: -1;
  position: absolute;
  background-image: url(${bgImage});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  width: 100%;
  height: 100%;
`;

export const LayoutContainer = styled.div`
  display: flex;
  flex: 1;
  padding: 25px;
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 30px;
  background-color: ${({ theme }) => theme.cardColor};
  border-radius: 15px;
  border: ${({ theme }) => `1px solid ${theme.strokeColor}`};
  min-width: 245px;
  height: 100%;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1;
`;  

export const ContentContainer = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: ${({ theme }) => theme.cardColor};
  border-radius: 10px;
  border: ${({ theme }) => `1px solid ${theme.strokeColor}`};
  padding: 35px 65px;
  width: 100%;
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
  width: fit-content;

  &::after {
    content: '';
    display: block;
    height: 3px;
    background-color: ${({ theme }) => theme.contrastColor};
    margin-top: 5px;
    border-radius: 4px;
  }
`;