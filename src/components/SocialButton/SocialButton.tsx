import { Button, Icon } from './styles';

type SocialButtonProps = {
  text: string
  icon: string
  url: string
}

export const SocialButton = ({ text, icon, url }: SocialButtonProps ) => {
  return ( 
    <Button href={url} target="_blank">
      <Icon src={icon} alt="Ícone rede social"/>
      {text}
    </Button>
  );
};