import styled, { keyframes } from 'styled-components';

type IconProps = {
  $left: boolean
  $right: boolean
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

export const CarouselContainer = styled.div`
  opacity: 0;
  animation: ${fadeIn} 0.6s ease-in-out forwards 0.3s;
  margin-top: 2%;
  width: 100%;
  max-width: 900px;

  .slick-slide:not(.slick-center) .card-project {
    filter: blur(5px);
    opacity: 0.6;
  }
  .slick-dots {
    bottom: -30px;
  }
  .slick-dots li button:before {
    color: ${({ theme }) => theme.contrastColor}; // Cor dos dots ativos
    font-size: 9px;
  }
  .slick-dots li.slick-active button:before {
    color: ${({ theme }) => theme.contrastColor}; // Cor dos dots ativos
  }
`;
export const ImageContainer = styled.div`
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
  background-color: ${({ theme }) => theme.secondaryColor};
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
`;
export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
export const SkillList = styled.ul`
  display: flex;
  gap: 8px;
  width: 100%;
`;
export const Skill = styled.li`
  font-size: 1.5rem;
  font-weight: 500;
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
  box-shadow: 1px 2px 4px #0008;
  border-radius: 4px;
  padding: 3px 13px;
`;