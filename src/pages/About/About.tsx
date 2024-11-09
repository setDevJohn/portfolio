import { Button } from '@components/Button';
import { CertificateItem } from './components';
import { certificates } from './certificateList';
import { PageContainer } from '@styles/pageStyle';
import buttonIcon from '@assets/icons/download.png';
import jhonyPhoto from '@assets/images/jhony-photo.jpg';
import { 
  ImageContainer,
  Photo,
  Text,
  TextContainer,
  AnimationContainer,
  TimeLineContainer,
  TimeLineItem
} from './styles';


export const About = () => (
  <PageContainer>
    <ImageContainer>
      <Photo src={jhonyPhoto} alt="Image do Jhony"/>

      <TextContainer>
        <Text>
          Desenvolvedor Front-End com experiência desde 2022, atuando em projetos freelance e em um cargo recente como desenvolvedor junior. Especialista em React, TypeScript e JavaScript, com forte domínio na criação de interfaces dinâmicas e responsivas. Experiência sólida em integração com APIs. Comprometido em seguir as melhores práticas de desenvolvimento e entrega de soluções de alta qualidade.
        </Text>

        <Button 
          text="Curriculo"
          icon={buttonIcon}
          handleClick={() => {}}
        />
      </TextContainer>
    </ImageContainer>

    <AnimationContainer>
      <TimeLineContainer>
        {certificates.map((certificate, i) =>(
          <TimeLineItem key={i}>
            <CertificateItem certificate={certificate}/>
          </TimeLineItem>
        ))}
      </TimeLineContainer>
    </AnimationContainer>
  </PageContainer>
);