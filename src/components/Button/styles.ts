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
  transition: transform 0.3s ease-out;
  cursor: pointer;
  
  &:hover {
    box-shadow: 2px 2px 8px 2px #0009;
  }
  &:active {
    transform: scale(0.95);
  }
`;
export const ButtonIcon = styled.img`
  width: 24px;
  height: 24px;
`;