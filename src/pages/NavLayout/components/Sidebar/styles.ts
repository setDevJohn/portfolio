import { sizes } from '../../../../styles/mediaSizes';
import styled from 'styled-components';

export const ProfileContainer = styled.div<{$open: boolean}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.mainColor};
  height: 100%;
  overflow: hidden;
  transition: all 0.4s ease;
  width: 215px;
  padding: 18px 12px 8px 12px;
  
  @media (${sizes.mobile}) {
    position: absolute;
    inset: 0;
    z-index: 2;
    overflow: hidden;
    width: 100%;
    transition: transform 1s ease;
    transform: ${({ $open }) => `translateX(${$open ? '0%' : '-100%'})` };
  }
`;

export const Icon = styled.div`
  position: absolute;
  right: 15px;
  top: 15px;
  display: none;

  @media (${sizes.mobile}) {
    display: block;
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
  color: ${({ theme }) => theme.contrastBgColor};
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