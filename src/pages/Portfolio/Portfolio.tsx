import { useEffect, useState } from 'react';
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
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Atualiza o tamanho da janela dinamicamente
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth < 768 ? window.innerWidth + 225  : window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup para evitar vazamentos de memória
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    centerMode: true,
    centerPadding: windowWidth < 1130 ? `${Math.max(0, (windowWidth - 1030))}px` : '100px',
    slidesToShow: 1,
    easing: 'ease',
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2500,
    nextArrow: <Icon $right src={rightArrow} alt="Próximo" />,
    prevArrow: <Icon $left src={leftArrow} alt="Anterior" />,
    adaptiveHeight: true
  };

  return (
    <PageContainer>
      <CarouselContainer $width={Math.max(0, (windowWidth - 350))}>
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