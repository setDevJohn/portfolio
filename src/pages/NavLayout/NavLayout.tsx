import { Outlet, useLocation } from 'react-router-dom';
import { MenuNavigation, Profile } from './components';
import { navList } from './components/MenuNavigation/navList';
import { 
  ContentContainer,
  LayoutContainer,
  Container, 
  MainContainer,
  PageTitle
} from './styles';

export const NavLayout = () => {
  const location = useLocation();
  const title = navList.find(({ path }) => path === location.pathname)?.label;

  return (
    <Container>
      <LayoutContainer>
        <Profile/>

        <MainContainer>
          <MenuNavigation />

          <ContentContainer>
            <PageTitle key={location.pathname}>
              {title}
            </PageTitle>
            <Outlet/>
          </ContentContainer>
        </MainContainer>
      </LayoutContainer>
    </Container>
  );
};