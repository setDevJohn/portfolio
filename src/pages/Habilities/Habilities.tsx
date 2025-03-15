import { useEffect } from 'react';
import { SkillList } from './componets';
import jsIcon from '@assets/images/javascript.png';
import tsIcon from '@assets/images/typescript.png';
import reactIcon from '@assets/images/react.png';
import nodeIcon from '@assets/images/node.png';
import { PageContainer } from '@styles/pageStyle';
import { ImageContainer, SkillIcon, TextSpan } from './styles';

export const Habilities = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const imageList = [
    { path: jsIcon, name: 'JS', animation: 'swing' },
    { path: reactIcon, name: 'React', animation: 'rotate' },
    { path: tsIcon, name: 'TS', animation: 'swing' },
    { path: nodeIcon, name: 'Node', animation: 'swing' },
  ];

  return (
    <PageContainer>
      <TextSpan>Mais usadas</TextSpan>
      <ImageContainer>
        {imageList.map(({ path, name, animation }) => (
          <SkillIcon 
            key={name}
            src={path} 
            $animation={animation}
            alt={`Ícone do ${name}`}
          />
        ))}
      </ImageContainer>

      <SkillList />
    </PageContainer>  
  );
};