import { Outlet, useLocation } from 'react-router-dom';
import { SideBar } from './components';
import { navList } from './components/MenuNavigation/navList';
import { 
  ContentContainer,
  LayoutContainer,
  PageTitle
} from './styles';
import { useEffect, useState } from 'react';
import { MobileHeader } from './components/MobileHeader/MobileHeader';

export const NavLayout = () => {
  const [sideBar, setSideBar] = useState(true);

  const location = useLocation();
  const title = navList.find(({ path }) => path === location.pathname)?.label;

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setSideBar(false), 1000);
  },[]);


  return (
    <LayoutContainer>
      <SideBar sideBar={sideBar} setSideBar={setSideBar}/>

      <ContentContainer>
        <MobileHeader sideBar={!sideBar} setSideBar={setSideBar} />
        <PageTitle key={location.pathname}>
          {title}
        </PageTitle>
        <Outlet/>
      </ContentContainer>
    </LayoutContainer>
  );
};