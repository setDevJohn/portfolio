import { skillList } from './list';
import { ProgressBar, ProgressContainer, Skill, SkillLabel, SkillsContainer, SpanProgress } from './styles';

export const SkillList = () => {
  return (
    <SkillsContainer>
      {skillList.map(({ name, progress }) => (
        <Skill key={name}>
          <SkillLabel>{name}</SkillLabel>

          <ProgressContainer>
            <ProgressBar $progress={progress}>
              <SpanProgress>{`${progress}%`}</SpanProgress>
            </ProgressBar>
          </ProgressContainer>
        </Skill>
      ))}
    </SkillsContainer>
  );
};