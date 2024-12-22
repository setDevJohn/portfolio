import styled from 'styled-components';

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.primaryColor};
  height: 100%;
  overflow: hidden;
  transition: all 0.4s ease;
  width: 225px;
  min-width: 225px;
  padding: 22px;
`;

export const ImageContainer = styled.div`
  background-color: ${({ theme }) => theme.mainColor};
  border-radius: 50%;
  overflow: hidden;
`;

export const ProfileImage = styled.img`
  width: 185px;
  height: 180px;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 500;
  margin: 18px 0 60px 0
`;