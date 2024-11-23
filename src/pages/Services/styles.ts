import styled, { keyframes } from 'styled-components';

type CardServicesProps = {
  $selected: boolean;
}

const slideIn = keyframes`
  0% {
    transform: translateY(90%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  margin-top: 9%;
  width: 100%;
`;
export const CardServices = styled.div<CardServicesProps>`
  display: flex;
  align-items: center;
  gap: 25px;
  background-color: ${({ theme }) => theme.primaryColor};
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  transition: all 0.6s ease;
  box-shadow: ${({ $selected, theme }) => (
    `0px 2px 11px -3px ${$selected ? theme.contrastColor : '#0008'}`
  )};
  min-width: 200px;
  max-width: 285px;
  min-height: 125px;
  cursor: pointer;
`;
export const CardTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
export const Title = styled.h2`
  color: ${({ theme }) => theme.contrastColor};
  font-size: 1.8rem;
  font-weight: 600;
`;
export const CardText = styled.p`
  line-height: 18px;
  font-size: 1.4rem;
`;
export const CardIcon = styled.img``;
export const DescContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 35px;
  width: 100%;
  max-width: 960px;
  animation: ${slideIn} 0.8s ease-out forwards;
`;
export const ServiceTitle = styled(Title)`
  font-size: 2.2rem;
`;
export const ServiceText = styled.p`
  font-size: 1.8rem;
  line-height: 26px;
  font-weight: 500;
`;