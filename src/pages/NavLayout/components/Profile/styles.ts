import styled from 'styled-components';

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 30px;
  background-color: ${({ theme }) => theme.cardColor};
  border-radius: 15px;
  border: ${({ theme }) => `1px solid ${theme.strokeColor}`};
  padding: 22px;
  min-width: 245px;
  height: 100%;
`;

export const ImageContainer = styled.div`
  background-color: ${({ theme }) => theme.mainColor};
  border-radius: 50%;
  overflow: hidden;
`;

export const ProfileImage = styled.img`
  width: 220px;
  height: 100%;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 500;
  margin: 18px 0 65px 0
`;