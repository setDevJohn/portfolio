import { sizes } from '@styles/mediaSizes';
import styled from 'styled-components';

type TextSpanProps = {
  $mobileHidden?: boolean;
}

export const CertificationName = styled.p`
  font-weight: 600;
`;
export const CompanyName = styled.p`
  font-weight: 400;
  text-decoration: underline;
  text-underline-offset: 4px;
  text-decoration-color: ${({ theme }) => theme.contrastColor};
  margin-right: 5px;
`;
export const Date = styled.p`
  font-weight: 500;
`;
export const TextSpan = styled.span<TextSpanProps>`
  font-weight: 500;
  color: ${({ theme }) => theme.contrastColor};

  @media (${sizes.mobile}) {
    display: ${({ $mobileHidden }) => $mobileHidden && 'none'};
  }
`;