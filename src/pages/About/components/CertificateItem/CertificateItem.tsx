import { 
  CertificationName,
  CompanyName,
  Date,
  TextSpan,
} from './styles';

type CertificateType = {
  certificate: {
    certification: string,
    company: string,
    initDate: number,
    finalDate: number
  }
}

export const CertificateItem = ({ certificate }: CertificateType) => (
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