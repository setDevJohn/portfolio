import { useEffect } from 'react';
import { CertificateItem } from './components';
import { certificates } from './certificateList';
import { PageContainer } from '@styles/pageStyle';
import jhonyPhoto from '@assets/images/about-jhony-photo.jpg';
import { 
  ImageContainer,
  Photo,
  Text,
  AnimationContainer,
  TimeLineContainer,
  TimeLineItem
} from './styles';

export const About = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <PageContainer>
      <ImageContainer>
        <Text>
        Desenvolvedor Full Stack, atualmente cursando Análise e Desenvolvimento de Sistemas (conclusão prevista para final de 2025). Possuo experiência prática em desenvolvimento web e amplo conhecimento em tecnologias como TypeScript, React, Express, Prisma, entre outras. Meu foco é criar soluções práticas e essenciais, sempre com atenção à qualidade do código e à experiência do usuário, transformando necessidades em soluções inovadoras.
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
  ); };