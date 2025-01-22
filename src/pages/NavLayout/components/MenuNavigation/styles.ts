import styled from 'styled-components';
import { sizes } from '@styles/mediaSizes';

type ItemProps = {
  $active: boolean;
}
type NavProps = {
  $open: boolean;
}

export const NavigationContainer = styled.header`
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
  width: 100%;

  @media (${sizes.mobile}) {
    justify-content: start;
  }
`;

export const Icon = styled.img`
  display: none;
  width: 30px;
  cursor: pointer;

  @media (${sizes.mobile}) {
    display: block;
  }
`;

export const Nav = styled.nav<NavProps>`
  @media (${sizes.mobile}) {
    position: fixed;
    z-index: 1;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${({ theme }) => theme.secondaryColor};
    transition: ease all 0.4s;
    width: ${({ $open }) => $open ? '30%' : '0%'};
    min-width: ${({ $open }) => $open ? '130px' : '0px'};
    overflow: hidden;
  }
`;

export const NavigationList = styled.ul`
  display: flex;
  gap: 30px;

  @media (${sizes.mobile}) {
    flex-direction: column;
    margin: 18px 15px;
    gap: 25px;
  }
`;

export const Item = styled.li<ItemProps>`
  font-size: 1.9rem;
  font-weight: ${({ $active }) => $active ? 500 : 400};
  color: ${({ $active, theme }) => $active && theme.contrastColor};
  cursor: pointer;
  padding: 2px 4px;
  transition: 0.4s ease-in-out;

  &:hover {
    transform: translateY(-2px);
  }

  @media (${sizes.mobile}) {
    font-size: 2rem;
    background-color: ${({ $active, theme }) => $active && theme.contrastColor};
    color: ${({ $active }) => $active && '#000'};
    border-radius: 10px;
  }
`;