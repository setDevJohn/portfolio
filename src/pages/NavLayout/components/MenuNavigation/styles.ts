import styled from 'styled-components';

type ItemProps = {
  $active: boolean;
}

export const NavigationContainer = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 45px;
`;

export const Nav = styled.nav``;

export const NavigationList = styled.ul`
  display: flex;
  gap: 30px;
`;

export const Item = styled.li<ItemProps>`
  font-weight: ${({ $active }) => $active ? 600 : 400};
  font-size: 1.8rem;
  color: ${({ $active, theme }) => $active && theme.contrastColor};
  cursor: pointer;
  transition: 0.4s ease-in-out;

  &:hover {
    transform: translateY(-3px);
  }
`;
