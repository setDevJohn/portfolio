import styled, { keyframes } from 'styled-components';

const slider = keyframes`
  from { transform: translateY(-200px) }
  to { transform: translateY(0)}
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 45px;
  margin-top: 3%;
  width: 100%;
  max-width: 1000px;
`;
export const Photo = styled.img`
  width: 100%;
  max-width: 215px;
  border-radius: 10px;
`;
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: end;
  gap: 30px;
`;
export const Text = styled.p`
  text-align: justify;
  font-weight: 500;
  font-size: 1.7rem;
`;
export const AnimationContainer = styled.div`
  overflow: hidden;
  padding: 0 10px;
  margin-top: 45px;
`;
export const TimeLineContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 45px;
  border-left: ${({ theme }) => `4px solid ${theme.contrastColor}`};
  padding: 28px;
  transform: translateY(-210px);
  animation: ${slider} 1.5s ease-out forwards;
  animation-delay: 0.4s;
`;
export const TimeLineItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 5px;

  &::before {
    content: '';
    position: absolute;
    left: -42px;
    z-index: 1;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.primaryColor};
    border: ${({ theme }) => `${theme.contrastColor} 3px solid`};
  }
`;
