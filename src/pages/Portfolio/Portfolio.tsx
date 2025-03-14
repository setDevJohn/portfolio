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
  const [realWindowWidth, setRealWindowWidth] = useState(window.innerWidth);
  

  // Atualiza o tamanho da janela dinamicamente
  useEffect(() => {
    const handleResize = () => {
      const currentWindowWidth = window.innerWidth;
      setRealWindowWidth(currentWindowWidth);

      const windowUpdated = () => {
        if (currentWindowWidth > 768) return currentWindowWidth;
        if (currentWindowWidth > 458 && currentWindowWidth < 768) return currentWindowWidth + 220;
        return currentWindowWidth + 550;
      };
      
      setWindowWidth(windowUpdated());
    };

    handleResize();

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
    centerPadding: windowWidth < 1300 ? `${Math.max(0, (windowWidth - 1200))}px` : '100px',
    slidesToShow: 1,
    easing: 'ease',
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2500,
    nextArrow: realWindowWidth > 458 ? <Icon src={rightArrow} alt="Próximo" /> : <></>,
    prevArrow: realWindowWidth > 458 ?  <Icon $left src={leftArrow} alt="Anterior" /> : <></>,
    adaptiveHeight: true
  };

  return (
    <PageContainer>
      <CarouselContainer $width={Math.max(0, (windowWidth - 350))}>
        <Slider {...settings} style={{ width: '100%' }}>
          {projectList.map((curProduct) => { 
            const { 
              path,
              name,
              repoLink,
              backRepoLink,
              deployLink,
              stacks,
              mobile
            } = curProduct; 

            return (
              <CardProject 
                key={name} 
                className="card-project"
                // $active={selectedCard === name}
                onClick={() => setSelectedCard(name)}
              >
                <ImageContainer $mobileSrc={mobile}>
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

                    <ButtonContainer 
                      // $active={selectedCard === name}
                    >
                      {repoLink && (
                        <PageButton href={repoLink} target="_blank">
                          {backRepoLink? 'Rep. Frontend' : 'Repositório'}
                        </PageButton>
                      )}

                      {backRepoLink && (
                        <PageButton href={backRepoLink} target="_blank">
                          Rep. Backend
                        </PageButton>
                      )}

                      <PageButton href={deployLink} target="_blank">
                        Deploy
                      </PageButton>
                    </ButtonContainer>
                  </CardFooter>
                </InfoContainer>
              </CardProject>
            );
          })}
        </Slider>
      </CarouselContainer>
    </PageContainer>  
  );
};