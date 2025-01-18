import { CSSObject } from 'styled-components';
import { ButtonContainer, ButtonIcon } from './styles';

type ButtonProps = {
  text: string
  icon: string
  type?: string
  style: CSSObject
  handleClick?: () => void
}

export const Button = ({ text, icon, type, style, handleClick }: ButtonProps) => {
  return ( 
    <ButtonContainer style={style} type={type || 'button'}>
      {text}
      <ButtonIcon 
        src={icon} 
        alt={`Ícone do botão de ${text}`}
        onClick={handleClick}
      />
    </ButtonContainer>
  );
};