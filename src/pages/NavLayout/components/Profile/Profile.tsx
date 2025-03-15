import { useContext } from 'react';
import { ThemeContext } from '@context/ThemeContext';
import { MenuNavigation } from '../index';
import { ToggleButton } from '@components/ToggleButton';
import profile from '@assets/images/animated-jhony.png';
import { 
  FooterSideBar,
  ImageContainer,
  ProfileContainer,
  ProfileImage,
  SubTitle,
  Title,
} from './styles';


export const Profile = () => {
  const { theme, handleChangeTheme } = useContext(ThemeContext);

  return (
    <ProfileContainer>
      <ImageContainer>
        <ProfileImage src={profile} alt="Imagem John animado"/>
      </ImageContainer>

      <Title>Jhony Freitas</Title>
      <SubTitle>Desenvolvedor Fullstack</SubTitle>

      {/* <SocialMedia /> */}
      <MenuNavigation />

      <FooterSideBar>
        <ToggleButton 
          handleClick={handleChangeTheme}
          checked={theme.textColor !== '#FFFFFF'} 
        />
      </FooterSideBar>
    </ProfileContainer>
  );
};