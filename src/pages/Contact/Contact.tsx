import { SocialForm, SocialNav } from './components';
import { PageContainer } from '@styles/pageStyle';
import { SpanFooter } from './styles';
import { useEffect } from 'react';

export const Contact = () => { 
  useEffect(() => { window.scrollTo(0, 0); }, []);
  
  return (
    <PageContainer>
      <SocialNav />

      <SocialForm />

      <SpanFooter>Desenvolvedor Fullstack</SpanFooter>
    </PageContainer>  
  ); };
