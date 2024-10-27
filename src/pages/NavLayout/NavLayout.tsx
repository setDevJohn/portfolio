import { Outlet, useLocation } from 'react-router-dom';
import { MenuNavigation } from './components/MenuNavigation';
import { navList } from './components/MenuNavigation/navList';
import { 
  BackgroundBlur,
  ContentContainer,
  LayoutContainer,
  Container, 
  MainContainer,
  ProfileContainer, 
  PageTitle
} from './styles';


export const NavLayout = () => {
  const location = useLocation();
  const title = navList.find(({ path }) => path === location.pathname)?.label;
  
  return (
    <Container>
      <BackgroundBlur />

      <LayoutContainer>
        <ProfileContainer />

        <MainContainer>
          <MenuNavigation />

          <ContentContainer>
            <PageTitle>{title}</PageTitle>
            <Outlet/>
          </ContentContainer>
        </MainContainer>
      </LayoutContainer>
    </Container>
  );
};