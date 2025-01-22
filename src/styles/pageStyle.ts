import styled from 'styled-components';

type PageProps = {
  $contrast: boolean;
}

export const PageContainer = styled.section<PageProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme, $contrast }) => $contrast && theme.primaryColor};
  width: 100%;
  flex: 1;
  padding: 45px 60px;
`;