import styled, { keyframes } from 'styled-components';

const slider = keyframes`
  from { transform: translateY(-200px) }
  to { transform: translateY(0)}
`;

export const PageContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  flex: 1;
  padding: 15px 0;
`;
export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 45px;
  margin-top: 4%;
  width: 100%;
  max-width: 1000px;
`;
export const Photo = styled.img`
  width: 100%;
  max-width: 235px;
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
  font-size: 1.8rem;
`;
export const AnimationContainer = styled.div`
  overflow: hidden;
  padding: 0 10px;
  margin-top: 80px;
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
export const CertificationName = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
`;
export const CompanyName = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  text-decoration: underline;
  text-underline-offset: 4px;
  text-decoration-color: ${({ theme }) => theme.contrastColor};
  margin-right: 5px;
`;
export const Date = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
`;
export const TextSpan = styled.span`
  font-size: 1.6rem;
  font-weight: 500;
  color: ${({ theme }) => theme.contrastColor};
`;