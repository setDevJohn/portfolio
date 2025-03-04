import { CSSObject } from 'styled-components';
import { ButtonContainer, ButtonIcon } from './styles';
import { CircularProgress } from '@mui/material';

type ButtonProps = {
  text: string
  icon: string
  type?: 'button' | 'reset' | 'submit'
  style?: CSSObject
  loading?: boolean
  handleClick?: () => void
}

export const Button = ({ text, icon, type, style, loading, handleClick }: ButtonProps) => {
  return ( 
    <ButtonContainer 
      style={style}
      disabled={loading}
      type={type || 'button'}
      onClick={handleClick}
    >
      {text}
      { loading ? (
        <CircularProgress size={24} />
      ) : (
        <ButtonIcon src={icon} alt={`Ícone do botão de ${text}`}/>
      )}

    </ButtonContainer>
  );
};