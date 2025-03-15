import styled, { keyframes } from 'styled-components';

type InputProps = {
  $error: boolean;
}

type ErrorSpanProps = {
  $error: boolean;
}

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
  gap: 7px;
  margin-top: 60px;
  width: 100%;  
  max-width: 500px;
`;
export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  animation: ${zoom} 0.8s ease-in-out forwards;
`;
export const SocialInput = styled.input<InputProps>`
  background-color: ${({ theme }) => theme.secondaryColor};
  color: ${({ theme }) => theme.textColor};
  font-size: 1.7rem;
  border-radius: 7px;
  box-shadow: 1px 2px 7px -2px #0004;
  padding: 12px 19px;
  border: none;
  outline: ${({ $error }) => $error ? '1px solid #7d0c0c' : 'none'};
  width: 100%;
  animation: ${zoom} 0.8s ease-in-out forwards;

  &::placeholder {
    color: ${({ theme }) => theme.textColor};
  }
`;
export const ErrorSpan = styled.span<ErrorSpanProps>`
  opacity: ${({ $error }) => $error ? 1 : 0}; 
  color: #cd2121;
  font-size: 10px;
  margin-left: 4px;
`;
export const SocialTextArea = styled.textarea<InputProps>`
  background-color: ${({ theme }) => theme.secondaryColor};
  color: ${({ theme }) => theme.textColor};
  font-size: 1.7rem;
  border-radius: 7px;
  box-shadow: 1px 2px 7px -2px #0004;
  border: none;
  outline: ${({ $error }) => $error ? '1px solid #7d0c0c' : 'none'};
  padding: 12px 19px;
  width: 100%;
  height: 122px;
  resize: none;
  margin-bottom: 6px;

  &::placeholder {
    color: ${({ theme }) => theme.textColor};
  }
`;