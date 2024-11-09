import styled, { keyframes } from 'styled-components';

const zoom = keyframes`
  from { 
    transform: scale(0.8);
    opacity: 0;
  }
  to { 
    transform: scale(1);
    opacity: 1;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 12px;
  margin-top: 60px;
  width: 100%;  
  max-width: 500px;
`;
export const SocialInput = styled.input`
  background-color: ${({ theme }) => theme.secondaryColor};
  font-size: 1.7rem;
  border-radius: 7px;
  box-shadow: 1px 2px 4px #0007;
  padding: 12px 19px;
  border: none;
  outline: none;
  width: 100%;
  animation: ${zoom} 0.8s ease-in-out forwards;

  &::placeholder {
    color: #fff;
  }
`;
export const SocialTextArea = styled.textarea`
  background-color: ${({ theme }) => theme.secondaryColor};
  font-size: 1.7rem;
  border-radius: 7px;
  box-shadow: 1px 2px 4px #0007;
  padding: 12px 19px;
  border: none;
  outline: none;
  width: 100%;
  height: 122px;
  resize: none;
  margin-bottom: 6px;
  animation: ${zoom} 0.8s ease-in-out forwards;

  &::placeholder {
    color: #fff;
  }
`;