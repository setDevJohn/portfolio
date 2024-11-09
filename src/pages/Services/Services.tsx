import { useState } from 'react';
import frontIcon from '@assets/icons/front.png';
import backIcon from '@assets/icons/back.png';
import infraIcon from '@assets/icons/infra.png';
import { PageContainer } from '@styles/pageStyle';
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

  const cardList = [
    {
      icon: frontIcon,
      title: 'Frontend',
      text: 'Criação de páginas funcionais e dinâmicas na web'
    },
    {
      icon: backIcon,
      title: 'Backend',
      text: 'Criação de aplicações e rotas para gerenciamento de banco de dados.'
    },
    {
      icon: infraIcon,
      title: 'Infra',
      text: 'Criação de infraestrutura, cofiguração e hospedagem da aplicação.'
    },
  ];

  return (
    <PageContainer>
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
          <ServiceText>Lorem ipsum dolor sit amet, consectetur adipisci elit,, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.</ServiceText>
        </DescContainer>
      </CardsContainer>
    </PageContainer>  
  );
};