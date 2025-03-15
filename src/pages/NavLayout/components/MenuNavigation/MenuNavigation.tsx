import { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { navList } from './navList';
import menuIcon from '@assets/icons/menu.svg';
import closeIcon from '@assets/icons/close.svg';
import { Icon, Item, Nav, NavigationContainer, NavigationList } from './styles';
import { ThemeContext } from '@context/ThemeContext';

export const MenuNavigation = () => {
  const [active, setActive] = useState(false);
  const { theme } = useContext(ThemeContext);

  const navigate = useNavigate();
  const location = useLocation();

  function handleNavigate (path: string) {
    setActive(false);
    navigate(path);
  }
  return ( 
    <NavigationContainer>
      <Icon src={menuIcon} alt="Ícone de menu" onClick={() => setActive(true)}/>

      <Nav $open={active}>
        <Icon 
          src={closeIcon}
          alt="Ícone de fechar"
          onClick={() => setActive(false)}
          style={{ 
            width: '40px',
            marginTop: '14px',
            alignSelf: 'end'
          }}
        />

        <NavigationList>
          {navList.map(({ label, path, icon: Icon }, i) =>(
            <Item 
              key={i} 
              onClick={() => handleNavigate(path)}
              $active={path === location.pathname} 
            >
              {Icon && (
                <Icon 
                  size={18}
                  fill={path === location.pathname ? theme.contrastColor : theme.textColor}
                />
              )}
              {label}
            </Item>
          ))}
        </NavigationList>
      </Nav>
    </NavigationContainer>
  );
};