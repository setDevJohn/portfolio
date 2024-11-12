import { useState } from 'react';
import Slider from 'react-slick';
import { projectList } from './projectList';
import { PageContainer } from '@styles/pageStyle';
import leftArrow from '@assets/icons/left.svg';
import rightArrow from '@assets/icons/right.svg';
import { 
  ButtonContainer,
  CardFooter,
  CardProject, 
  CardTitle, 
  CarouselContainer, 
  Icon, 
  ImageContainer, 
  InfoContainer, 
  PageButton, 
  ProjectImage, 
  Skill, 
  SkillList 
} from './styles';

export const Portfolio = () => {
  const [selectedCard, setSelectedCard] = useState('');

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    centerMode: true,
    centerPadding: '100px',
    slidesToShow: 1,
    easing: 'ease',
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    nextArrow: <Icon $right src={rightArrow} alt="Próximo" />,
    prevArrow: <Icon $left src={leftArrow} alt="Anterior" />,
    adaptiveHeight: true
  };

  return (
    <PageContainer>
      <CarouselContainer>
        <Slider {...settings} style={{ width: '100%' }}>
          {projectList.map(({ name, path, stacks }) => (
            <CardProject 
              key={name} 
              className="card-project"
              $active={selectedCard === name}
              onClick={() => setSelectedCard(name)}
            >
              <ImageContainer>
                <ProjectImage src={path} alt={`project ${name}`}/>
              </ImageContainer>

              <InfoContainer>
                <CardTitle>{name}</CardTitle>

                <CardFooter>
                  <SkillList>
                    {stacks.map(({ stack, color }) => (
                      <Skill $color={color}>{stack}</Skill>
                    ))}
                  </SkillList>

                  <ButtonContainer $active={selectedCard === name}>
                    <PageButton href={path}> Repositório </PageButton>

                    <PageButton href={path}> Deploy </PageButton>
                  </ButtonContainer>
                </CardFooter>
              </InfoContainer>
            </CardProject>
          ))}
        </Slider>
      </CarouselContainer>
    </PageContainer>  
  );
};