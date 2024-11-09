import { Button } from '@components/Button';
import buttonIcon from '@assets/icons/download.png';
import jhonyPhoto from '@assets/images/jhony-photo.jpg';
import { 
  CertificationName,
  CompanyName,
  Date,
  ImageContainer,
  PageContainer,
  Photo,
  Text,
  TextContainer,
  TextSpan,
  AnimationContainer,
  TimeLineContainer,
  TimeLineItem
} from './styles';

type CertificateType = {
  certification: string,
  company: string,
  initDate: number,
  finalDate: number
}

export const About = () => {
  const certificates = [
    {
      certification: 'Análise e Desenvolvimento de Sistemas', 
      company: 'UNINOVE', 
      initDate: 2023, 
      finalDate: 2025 
    },
    {
      certification: 'Desenvolvedor Fullstack', 
      company: 'DevQuest', 
      initDate: 2022, 
      finalDate: 2024 
    },
    {
      certification: 'Desenvolvedor Web', 
      company: 'Prepara Cursos', 
      initDate: 2020, 
      finalDate: 2022 
    },
  ];

  const formattedCertificate = (certificate: CertificateType) => {
    return (
      <>
        <CertificationName>{certificate.certification}</CertificationName>
        <TextSpan> - </TextSpan> 
        <CompanyName>{certificate.company}</CompanyName>
        <Date>
          {certificate.initDate}
          <TextSpan> / </TextSpan>
          {certificate.finalDate}
        </Date>
      </>
    );
  };

  return (
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
              {formattedCertificate(certificate)}
            </TimeLineItem>
          ))}
        </TimeLineContainer>
      </AnimationContainer>
    </PageContainer>
  );
};