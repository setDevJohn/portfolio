import { useContext } from 'react';
import { ThemeContext } from '@context/ThemeContext';
import { MenuNavigation } from '../index';
import { ToggleButton } from '@components/ToggleButton';
import profile from '@assets/images/animated-jhony.png';
import { RxCross2 } from 'react-icons/rx';
import { 
  FooterSideBar,
  Icon,
  ImageContainer,
  ProfileContainer,
  ProfileImage,
  SubTitle,
  Title,
} from './styles';

type TSideBar = {
  sideBar: boolean
  setSideBar: (status: boolean) => void
}

export const SideBar = ({ sideBar, setSideBar }: TSideBar) => {
  const { theme, handleChangeTheme } = useContext(ThemeContext);
  
  return (
    <ProfileContainer $open={sideBar}>
      <Icon as={RxCross2} size={30} onClick={() => setSideBar(false)}/>

      <ImageContainer>
        <ProfileImage src={profile} alt="Imagem John animado"/>
      </ImageContainer>

      <Title>Jhony Silva</Title>
      <SubTitle>Desenvolvedor Fullstack</SubTitle>

      <MenuNavigation setSideBar={setSideBar}/>

      <FooterSideBar>
        <ToggleButton 
          handleClick={handleChangeTheme}
          checked={theme.textColor !== '#FFFFFF'} 
        />
      </FooterSideBar>
    </ProfileContainer>
  );
};