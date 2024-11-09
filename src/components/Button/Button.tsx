import { ButtonContainer, ButtonIcon } from './styles';

type ButtonProps = {
  text: string
  icon: string
  type?: string
  handleClick?: () => void
}

export const Button = ({ text, icon, type, handleClick }: ButtonProps) => {
  return ( 
    <ButtonContainer type={type || 'button'}>
      {text}
      <ButtonIcon 
        src={icon} 
        alt={`Ícone do botão de ${text}`}
        onClick={handleClick}
      />
    </ButtonContainer>
  );
};