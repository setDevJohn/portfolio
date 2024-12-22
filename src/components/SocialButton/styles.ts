import styled from 'styled-components';

export const Button = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.secondaryColor};
  font-size: 1.8rem;
  font-weight: 500;
  border-radius: 6px;
  border: none;
  box-shadow: 2px 2px 4px #0008;
  height: 38px; 
  width: 100%;
  transition: .4s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const Icon = styled.img`
  position: absolute;
  width: 27px;
  left: 9px;
`;