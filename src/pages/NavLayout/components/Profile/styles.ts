import styled, { css } from 'styled-components';

type ProfileContainerProps = {
  $statusBar: boolean
}

export const ProfileContainer = styled.div<ProfileContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.cardColor};
  border-radius: 15px;
  height: 100%;
  overflow: hidden;
  transition: all 0.4s ease;
  ${({ $statusBar, theme }) => $statusBar ? ( 
    css`
      border: ${`1px solid ${theme.strokeColor}`};
      width: 225px;
      min-width: 225px;
      padding: 22px;
      margin-right: 30px;
    ` 
  ) : ( 
    css`
      border: none;
      width: 0px;
      min-width: 0px;
      padding: 0px;
      margin-right: 0px;
    `
  )}
`;

export const ImageContainer = styled.div`
  background-color: ${({ theme }) => theme.primaryColor};
  border-radius: 50%;
  overflow: hidden;
`;

export const ProfileImage = styled.img`
  width: 175px;
  height: 176px;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 500;
  margin: 18px 0 60px 0
`;