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
  height: 40px;
  width: 100%;
  cursor: pointer;
`;

export const Icon = styled.img``;