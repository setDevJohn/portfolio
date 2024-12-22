import { SocialMedia } from '../index';
import profile from '@assets/images/animated-jhony.png';
import { ImageContainer, ProfileContainer, ProfileImage, Title } from './styles';

export const Profile = () => {
  return (
    <ProfileContainer>
      <ImageContainer>
        <ProfileImage src={profile} alt="Imagem John animado"/>
      </ImageContainer>

      <Title>Jhony Freitas</Title>

      <SocialMedia />
    </ProfileContainer>
  );
};