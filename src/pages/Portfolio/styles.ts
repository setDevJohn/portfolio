import styled, { keyframes } from 'styled-components';
import { sizes } from '@styles/mediaSizes';

type IconProps = {
  $left: boolean
  $right: boolean
}

type SkillProps = {
  $color: string
}

type ImageContainerProps = {
  $mobileSrc: string
}

type CarouselContainerProps = {
  $width: number;
}

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;
export const CarouselContainer = styled.div.attrs<CarouselContainerProps>(({ $width }) => ({
  style: {
    maxWidth: $width < 1000 ? `${$width}px` : '1000px',
  },
}))`
  opacity: 0;
  animation: ${fadeIn} 0.6s ease-in-out forwards 0.3s;
  margin-top: 2%;
  width: 100%;

  .slick-slide:not(.slick-center) .card-project {
    filter: blur(5px);
    opacity: 0.6;
  }
  .slick-dots {
    bottom: -30px;
  }
  .slick-dots li button:before {
    color: ${({ theme }) => theme.contrastColor};
    font-size: 9px;
  }
  .slick-dots li.slick-active button:before {
    color: ${({ theme }) => theme.contrastColor};
  }

  @media (${sizes.mobile}) {
    margin-top: 10%;
  }
`;

export const ImageContainer = styled.div<ImageContainerProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00000082;
  transition: ease 0.6s;
  border-radius: 5px;
  overflow: hidden;
  margin: 0 auto 10px auto;
  width: 100%;

  @media (max-width: 458px) {
    img {
      content: url(${({ $mobileSrc }) => $mobileSrc});
      max-height: 400px;
    }
  }
`;
export const CardProject = styled.div`
  transition: 0.8s ease;
  padding: 0 25px ;
  width: 100%;
`;
export const ProjectImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
`;
export const Icon = styled.img<IconProps>`
  transform: ${({ $left }) => `translate(${$left ? '-' : ''}15px, -25px)`};
  width: 40px;
  height: 40px;
`;
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  background-color: ${({ theme }) => theme.primaryColor};
  border-radius: 4px;
  padding: 10px 20px;
  margin: 0 auto;
  width: 100%;
`;
export const CardTitle = styled.p`
  font-size: 2.4rem;
  font-weight: 500;
  margin-top: 3px;
  width: 100%;

  @media (${sizes.mobile}) {
    font-size: 1.7rem;
  }
`;
export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (${sizes.mobile}) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;
export const SkillList = styled.ul`
  display: flex;
  gap: 8px;
  width: 100%;
`;
export const Skill = styled.li<SkillProps>`
  font-size: 1.5rem;
  font-weight: 500;
  color: ${({ $color }) => $color};
`;
export const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
`;
export const PageButton = styled.a`
  display: flex;
  background-color: ${({ theme }) => theme.contrastColor};
  color: #000;
  font-size: 1.6rem;
  font-weight: 500;
  box-shadow: 2px 2px 4px #0008;
  border-radius: 5px;
  padding: 4px 13px;

  @media (${sizes.mobile}) {
    font-size: 1.5rem;
    padding: 3px 7px;
  }
`;