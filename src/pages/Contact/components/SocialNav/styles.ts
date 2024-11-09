import styled, { keyframes } from 'styled-components';

const opacity = keyframes`
  from { opacity: 0 }
  to { opacity: 1 }
`;
const balance = keyframes`
  0% { transform: translateY(0) }
  50% { transform: translateY(-3px) }
  100% { transform: translateY(0) }
`;

export const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  margin-top: 3%;
  width: 100%;
  max-width: 350px;
`;
export const SocialTitle = styled.h2`
  font-weight: 500;
  font-size: 3rem;
`;
export const SocialList = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  gap: 22px;
`;
export const SocialLink = styled.a`
  animation: 
    ${opacity} 1s ease forwards,
    ${balance} 1.3s ease infinite;
`;
export const SocialIcon = styled.img``;