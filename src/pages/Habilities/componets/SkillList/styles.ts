import { sizes } from '@styles/mediaSizes';
import styled, { css, keyframes } from 'styled-components';

type ProgressBarProps = {
  $progress: number
}

const animateWidth = (width: number) => keyframes`
  from {
    width: 0%;
  }
  to {
    width: ${width}%;
  }
`;
const opacityAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 6px 30px;
  width: 100%;
  max-width: 855px;

  @media (${sizes.mobile}) {
    grid-template-columns: auto;
  }
`;
export const Skill = styled.div`
  justify-items: end;
  display: grid;
  align-items: center;
  grid-template-columns: 97px auto;
  gap: 9px;
`;
export const SkillLabel = styled.p`
  font-size: 1.8rem;
  font-weight: 500;
  animation: ${opacityAnimation} 1s ease-in forwards;
`;
export const ProgressContainer = styled.div`
  display: flex;
  width: 100%;
  height: 21px;
  overflow: hidden;
`;
export const ProgressBar = styled.div<ProgressBarProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.contrastColor};
  border-radius: 3px;
  height: 100%;
  width: 0;
  ${({ $progress }) => css`
    animation: ${animateWidth($progress)} 1s ease forwards;
    animation-delay: 0.4s;
  `}
`;
export const SpanProgress = styled.span`
  opacity: 0;
  animation: ${opacityAnimation} 1.2s ease forwards;
  animation-delay: 1s;
  color: #000;
  font-size: 1.4rem;
  font-weight: 500;
`;