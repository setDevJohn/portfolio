import { SocialForm, SocialNav } from './components';
import { PageContainer } from '@styles/pageStyle';
import { SpanFooter } from './styles';

export const Contact = () => (
  <PageContainer $contrast id="contact">
    <SocialNav />

    <SocialForm />

    <SpanFooter>Desenvolvedor Fullstack</SpanFooter>
  </PageContainer>  
);
