import styled from 'styled-components';

export const CertificationName = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
`;
export const CompanyName = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  text-decoration: underline;
  text-underline-offset: 4px;
  text-decoration-color: ${({ theme }) => theme.contrastColor};
  margin-right: 5px;
`;
export const Date = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
`;
export const TextSpan = styled.span`
  font-size: 1.6rem;
  font-weight: 500;
  color: ${({ theme }) => theme.contrastColor};
`;