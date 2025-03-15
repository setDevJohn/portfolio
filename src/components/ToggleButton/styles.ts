import styled from 'styled-components';

type ButtonContainerProps = {
  $checked: boolean;
  $width?: number;
  $height?: number;
};

type CircleProps = {
  $checked: boolean;
};

const ButtonContainer = styled.div<ButtonContainerProps>`
  display: flex;
  align-items: center;
  background-color: ${({ $checked }) => ($checked ? '#5fabff' : '#1e2d57')};
  border-radius: 15px;
  transition: ease-in-out 0.5s;
  padding: 0 3px;
  width: ${({ $width }) => `${$width || '50'}px`};
  height: ${({ $height }) => `${$height || '27'}px`};
  cursor: pointer;
`;

const Circle = styled.div<CircleProps>`
  width: 23px;
  height: 23px;
  border-radius: 50%;
  background-color: #ffffff;
  box-shadow: 0 0 4px #00000091;
  transition: margin ease-in-out 0.4s;
  margin-left: ${({ $checked }) => ($checked ? '21px' : '0')};
  margin-right: ${({ $checked }) => ($checked ? '0' : '21px')};
  overflow: hidden;
  cursor: pointer;
`;

export { Circle, ButtonContainer };