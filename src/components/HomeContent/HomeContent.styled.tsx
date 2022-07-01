import styled from 'styled-components';
import { Typography } from 'components/Typography';

export const HelloImg = styled.img`
  max-width: 30%;
  margin: 0 auto;
  text-align: center;
  display: block;
`;

export const Title = styled(Typography.Title)`
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(to top, #ff0844 0%, #ffb199 100%);
`;
