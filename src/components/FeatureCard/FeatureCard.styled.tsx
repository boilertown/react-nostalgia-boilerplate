import styled from 'styled-components';
import { Typography } from 'components/Typography';

export const Card = styled.div`
  border-radius: 4px;
  padding: 24px;
  color: #fff;

  &.gradient-0 {
    background-image: radial-gradient(
      circle farthest-corner at 12.3% 19.3%,
      rgba(85, 88, 218, 1) 0%,
      rgba(95, 209, 249, 1) 100.2%
    );
  }

  &.gradient-1 {
    background-image: linear-gradient(
      68.3deg,
      rgba(245, 177, 97, 1) 0.4%,
      rgba(236, 54, 110, 1) 100.2%
    );
  }
`;

export const Title = styled(Typography.Title)`
  margin-bottom: 12px;
`;
