import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { navList } from './navList';
import menuIcon from '@assets/icons/menu.svg';
import closeIcon from '@assets/icons/close.svg';
import { Icon, Item, Nav, NavigationContainer, NavigationList } from './styles';

export const MenuNavigation = () => {
  const [active, setActive] = useState(false);

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
          {navList.map(({ label, path }, i) =>(
            <Item 
              key={i} 
              onClick={() => handleNavigate(path)}
              $active={path === location.pathname} 
            >
              {label}
            </Item>
          ))}
        </NavigationList>
      </Nav>
    </NavigationContainer>
  );
};