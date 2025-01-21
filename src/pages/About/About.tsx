import { CertificateItem } from './components';
import { certificates } from './certificateList';
import { PageContainer } from '@styles/pageStyle';
import jhonyPhoto from '@assets/images/jhony-photo.jpg';
import { 
  ImageContainer,
  Photo,
  Text,
  AnimationContainer,
  TimeLineContainer,
  TimeLineItem
} from './styles';


export const About = () => (
  <PageContainer>
    <ImageContainer>
      <Text>
        Desenvolvedor Full Stack com experiência desde 2022, atuando em projetos freelance e como desenvolvedor júnior. Atualmente cursando Análise e Desenvolvimento de Sistemas, com conclusão prevista para 2025. Especialista em React, TypeScript e JavaScript, com forte domínio na criação de interfaces dinâmicas e responsivas e sólida experiência em integração com APIs. Conhecimento prático em tecnologias como Node.js, Express, Prisma e MySQL. Focado em criar soluções modernas e eficientes, com atenção à qualidade do código, experiência do usuário e as melhores práticas de desenvolvimento.
      </Text>

      <Photo src={jhonyPhoto} alt="Image do Jhony"/>
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