import styled from 'styled-components';
import { sizes } from '@styles/mediaSizes';

type ItemProps = {
  $active: boolean;
}
type NavProps = {
  $open: boolean;
}

export const NavigationContainer = styled.nav`
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

export const Nav = styled.div<NavProps>`
  width: 100%;
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
  flex-direction: column;
  gap: 8px;
  width: 100%;

  @media (${sizes.mobile}) {
    margin: 18px 15px;
    gap: 25px;
  }
`;

export const Item = styled.li<ItemProps>`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1.8rem;
  background-color: ${({ $active, theme }) => $active && theme.contrastBgColor};
  color: ${({ $active, theme }) => $active && theme.contrastColor};
  cursor: pointer;
  transition: background-color 0.4s ease;
  border-radius: 3px;
  padding: 4px 7px;
  width: 100%;

  &:hover {
    background-color: ${({ $active, theme }) => !$active && theme.grayColor};
  }

  @media (${sizes.mobile}) {
    font-size: 2rem;
    background-color: ${({ $active, theme }) => $active && theme.contrastColor};
    color: ${({ $active }) => $active && '#000'};
    border-radius: 10px;
  }
`;