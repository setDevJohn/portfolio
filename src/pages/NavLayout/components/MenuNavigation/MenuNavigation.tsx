import { navList } from './navList';
import { Item, Nav, NavigationContainer, NavigationList } from './styles';

export const MenuNavigation = () => {
  return ( 
    <NavigationContainer>
      <Nav>
        <NavigationList>
          {navList.map(({ label }, i) =>(
            <Item key={i} $active={i === 0}>
              {label}
            </Item>
          ))}
        </NavigationList>
      </Nav>
    </NavigationContainer>
  );
};