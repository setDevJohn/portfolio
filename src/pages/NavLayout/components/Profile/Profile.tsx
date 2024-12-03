import { SocialMedia } from '../index';
import profile from '@assets/images/animated-jhony.png';
import { ImageContainer, ProfileContainer, ProfileImage, Title } from './styles';

export const Profile = ({ statusBar }: {statusBar: boolean}) => {
  return (
    <ProfileContainer $statusBar={statusBar}>
      <ImageContainer>
        <ProfileImage src={profile} alt="Imagem John animado"/>
      </ImageContainer>

      <Title>Jhony Freitas</Title>

      <SocialMedia />
    </ProfileContainer>
  );
};