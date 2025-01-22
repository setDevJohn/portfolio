import { useState } from 'react';
import { PageContainer } from '@styles/pageStyle';
import { cardList } from './cardList';
import { 
  CardIcon, 
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


  return (
    <PageContainer id="services">
      <CardsContainer>
        {cardList.map(({ icon, title, text }) => (
          <CardServices 
            key={title} 
            $selected={title === selectedCard}
            onClick={() => setSelectedCard(title)}
          >
            <CardIcon src={icon}/>

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