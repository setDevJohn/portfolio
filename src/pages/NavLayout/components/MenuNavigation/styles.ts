import { sizes } from '@styles/mediaSizes';
import styled from 'styled-components';

type ItemProps = {
  $active: boolean;
}

export const NavigationContainer = styled.nav`
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
  width: 100%;

  @media (${sizes.mobile}) {
    padding: 7px 15px;
  }
`;

export const NavigationList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
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
    padding: 6px 8px;
  }
`;