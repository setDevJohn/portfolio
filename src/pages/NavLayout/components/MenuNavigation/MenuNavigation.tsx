import { useLocation, useNavigate } from 'react-router-dom';
import { navList } from './navList';
import { Item, Nav, NavigationContainer, NavigationList } from './styles';

export const MenuNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  return ( 
    <NavigationContainer>
      <Nav>
        <NavigationList>
          {navList.map(({ label, path }, i) =>(
            <Item 
              key={i} 
              onClick={() => navigate(path)}
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