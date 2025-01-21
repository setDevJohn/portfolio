import { sizes } from '@styles/mediaSizes';
import styled from 'styled-components';

export const SpanFooter = styled.footer`
  font-size: 1.7rem;
  margin-top: auto;

  @media (${sizes.mobile}) {
    margin-top: 35px;
  }
`;
