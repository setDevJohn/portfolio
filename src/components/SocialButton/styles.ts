import styled from 'styled-components';

export const Button = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.secondaryColor};
  font-size: 18px;
  font-weight: 500;
  border-radius: 6px;
  border: none;
  box-shadow: 1px 2px 4px #0009;
  height: 42px;
  width: 100%;
  transition: .4s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
  }
`;

export const Icon = styled.img`
  position: absolute;
  left: 7px;
`;