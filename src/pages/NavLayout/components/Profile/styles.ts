import styled from 'styled-components';

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.mainColor};
  height: 100%;
  overflow: hidden;
  transition: all 0.4s ease;
  width: 215px;
  padding: 18px 12px 8px 12px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const ImageContainer = styled.div`
  background-color: ${({ theme }) => theme.primaryColor};
  border-radius: 50%;
  overflow: hidden;
`;

export const ProfileImage = styled.img`
  width: 155px;
  height: 155px;
`;

export const Title = styled.h2`
  font-size: 2.4rem;
  font-weight: 500;
  margin-top: 10px;
`;

export const SubTitle = styled.h1`
  color: ${({ theme }) => theme.grayFont};
  font-size: 1.7rem;
  font-weight: 500;
  margin-bottom: 40px;
`;

export const FooterSideBar = styled.div`
  display: flex;
  justify-content: end;
  border-top: ${({ theme }) => `1px solid ${theme.grayColor}`};
  padding: 12px;
  margin-top: auto;
  width: 100%;
`;