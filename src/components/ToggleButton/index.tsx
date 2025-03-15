import { FiMoon } from 'react-icons/fi';
import { MdLightMode } from 'react-icons/md';
import { ButtonContainer, Circle } from  './styles';



type ToggleButtonProps = {
  handleClick: () => void;
  checked: boolean;
  width?: number;
  height?: number;
  disabled?: boolean;
  loading?: boolean;
};

function ToggleButton ({
  handleClick,
  width,
  height,
  checked,
  disabled,
}: ToggleButtonProps) {
  return (
    <ButtonContainer
      $checked={checked}
      $width={width}
      $height={height}
      onClick={disabled ? () => {} : handleClick}
    >
      <Circle $checked={checked}>
        {checked 
          ? <MdLightMode size={23}/> 
          : <FiMoon size={24} fill='#000'/>
        }
      </Circle>
    </ButtonContainer>
  );
}

export { ToggleButton };