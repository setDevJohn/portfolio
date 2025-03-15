import { RxHamburgerMenu } from 'react-icons/rx';
import { FaNodeJs } from 'react-icons/fa';
import { MobileHeaderContainer } from './styles';
import { useContext } from 'react';
import { ThemeContext } from '@context/ThemeContext';

export function MobileHeader ({ sideBar, setSideBar }) {
  const { theme } = useContext(ThemeContext);

  return (
    <MobileHeaderContainer $open={sideBar}>
      <FaNodeJs size={30} fill={theme.contrastColor}/>

      <RxHamburgerMenu size={30} onClick={() => setSideBar(true)}/>
    </MobileHeaderContainer>
  );
}