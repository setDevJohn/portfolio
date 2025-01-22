import { Services } from '@pages/Services/Services';
import { MenuNavigation } from './components';
import { Portfolio } from '@pages/Portfolio/Portfolio';
import { About } from '@pages/About/About';
import { Habilities } from '@pages/Habilities/Habilities';
import { Contact } from '@pages/Contact/Contact';
import { ContentContainer, Container } from './styles';
import { useEffect } from 'react';

export const Home = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <Container>
      <MenuNavigation />

      <ContentContainer>
        <Services />
        <Portfolio />
        <Habilities />
        <About />
        <Contact />
      </ContentContainer>
    </Container>
  );
};