import { sizes } from '@styles/mediaSizes';
import styled from 'styled-components';

export const MobileHeaderContainer = styled.div<{$open : boolean}>`
  position: absolute;
  inset: 0;
  z-index: 1;
  display: none;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.mainColor};
  box-shadow: 0px 2px 7px -2px #0004;
  padding: 10px 15px;
  height: 45px;
  width: 100%;

  @media (${sizes.mobile}) {
    display: flex;
    transform: ${({ $open }) => `translateY(${$open ? '0%' : '-100%'})`};
    transition: transform 1s ease;
    transition-delay: ${({ $open }) => $open ? '.5s' : '0s'};
  }
`;
