import { SocialButton } from '@components/SocialButton';
import { mediasList } from './mediasList';
import { Item, SocialMediaList } from './styles';

export const SocialMedia = () => {
  return (
    <SocialMediaList>
      {mediasList.map(({ label, icon, url }) => (
        <Item>
          <SocialButton text={label} icon={icon} url={url}/>
        </Item>
      ))}
    </SocialMediaList>
  );
};