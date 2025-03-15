import { Outlet, useLocation } from 'react-router-dom';
import { Profile } from './components';
import { navList } from './components/MenuNavigation/navList';
import { 
  ContentContainer,
  LayoutContainer,
  PageTitle
} from './styles';

export const NavLayout = () => {
  const location = useLocation();
  const title = navList.find(({ path }) => path === location.pathname)?.label;

  return (
    <LayoutContainer>
      <Profile/>

      <ContentContainer>
        <PageTitle key={location.pathname}>
          {title}
        </PageTitle>
        <Outlet/>
      </ContentContainer>
    </LayoutContainer>
  );
};