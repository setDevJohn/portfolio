import { socialList } from './socialList';
import { 
  SocialContainer, 
  SocialIcon, 
  SocialLink, 
  SocialList, 
  SocialTitle, 
} from './styles';

export const SocialNav = () => (
  <SocialContainer>
    <SocialTitle>Entre em contato</SocialTitle>

    <SocialList>
      {socialList.map(({ icon, link }, i) => (
        <SocialLink key={i} href={link} target="_blank">
          <SocialIcon src={icon} alt="Ícone de rede social"/>
        </SocialLink>
      ))}
    </SocialList>
  </SocialContainer>
);