import styled from 'styled-components';

export const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: ${({ theme }) => theme.contrastColor};
  color: #000;
  font-size: 1.8rem;
  font-weight: 600;
  padding: 7px 8px 7px 18px;
  border-radius: 7px;
  box-shadow: 1px 2px 7px -2px #0004;
  transition: transform 0.3s ease-out;
  cursor: pointer;
  
  &:active {
    transform: scale(0.95);
  }
`;
export const ButtonIcon = styled.img`
  width: 24px;
  height: 24px;
`;