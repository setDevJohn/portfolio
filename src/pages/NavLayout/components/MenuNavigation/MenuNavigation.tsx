import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { navList } from './navList';
import { Item, NavigationContainer, NavigationList } from './styles';
import { ThemeContext } from '@context/ThemeContext';

export const MenuNavigation = ({ setSideBar }) => {
  const { theme } = useContext(ThemeContext);

  const navigate = useNavigate();
  const location = useLocation();

  function handleNavigate (path: string) {
    setSideBar(false);
    navigate(path);
  }
  return ( 
    <NavigationContainer>
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
    </NavigationContainer>
  );
};