import { sizes } from '@styles/mediaSizes';
import styled, { css, keyframes } from 'styled-components';

type SkillIconProps = {
  $animation: string
}

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;
const swing = keyframes`
  0% { transform: rotate(0deg); }
  25% { transform: rotate(5deg); }
  50% { transform: rotate(-5deg); }
  75% { transform: rotate(5deg); }
  100% { transform: rotate(0deg); }
`;

const animationStyles = (animationType: string) => {
  switch (animationType) {
    case 'rotate':
      return css`animation: ${rotate} 5s linear infinite;`;
    case 'swing': 
      return css`animation: ${swing} 1.8s ease infinite;`;
    default:
      return '';
  }
};

export const TextSpan = styled.span`
  font-size: 1.8rem;
  font-weight: 500;
  margin-top: 5%;

  @media (${sizes.mobile}) {
    margin-top: 10%;
  }
`;
export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 70px;
  margin: 21px 0 90px 0;

  @media (${sizes.mobile}) {
    gap: 25px;
    margin: 21px 0 70px 0;
  }
`;
export const SkillIcon = styled.img<SkillIconProps>`
  height: 60px;
  ${({ $animation }) => animationStyles($animation)}

  &:hover {
    transform: translateY(-5px);
    cursor: pointer;
  }

  @media (${sizes.mobile}) {
    height: 40px;
  }
`;
