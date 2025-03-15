import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '@context/ThemeContext';
import { PageContainer } from '@styles/pageStyle';
import { cardList } from './cardList';
import { 
  CardsContainer, 
  CardServices, 
  CardText, 
  CardTextContainer, 
  DescContainer, 
  ServiceText, 
  ServiceTitle, 
  Title 
} from './styles';

export const Services = () => {
  const [selectedCard, setSelectedCard] = useState('Frontend');
  const { theme } = useContext(ThemeContext);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <PageContainer>
      <CardsContainer>
        {cardList.map(({ icon: Icon, iconSize, title, text }) => (
          <CardServices 
            key={title} 
            $selected={title === selectedCard}
            onClick={() => setSelectedCard(title)}
          >
            <Icon size={iconSize} fill={theme.contrastColor}/>

            <CardTextContainer>
              <Title>{title}</Title>
              <CardText>{text}</CardText>
            </CardTextContainer>
          </CardServices>
        ))}

        <DescContainer key={selectedCard}>
          <ServiceTitle>{selectedCard}</ServiceTitle>
          
          <ServiceText>
            {cardList.find(({ title }) => title === selectedCard).desc}
          </ServiceText>
        </DescContainer>
      </CardsContainer>
    </PageContainer>  
  );
};