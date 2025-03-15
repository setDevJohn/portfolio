import { useContext } from 'react';
import { ThemeContext } from '@context/ThemeContext';
import { socialList } from './socialList';
import { 
  SocialContainer, 
  SocialLink, 
  SocialList, 
  SocialTitle, 
} from './styles';

export const SocialNav = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <SocialContainer>
      <SocialTitle>Entre em contato</SocialTitle>

      <SocialList>
        {socialList.map(({ icon: Icon, link }, i) => (
          <SocialLink key={i} href={link} target="_blank">
            <Icon size={38} fill={theme.textColor}/>
          </SocialLink>
        ))}
      </SocialList>
    </SocialContainer>
  );
};