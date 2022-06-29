import { Typography } from 'components/Typography';
import * as Sc from './FeatureCard.styled';

interface FeatureCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
}

export const FeatureCard = (props: FeatureCardProps) => {
  return (
    <Sc.Card className={props.className}>
      <Sc.Title size="medium" weight="bold">
        {props.title}
      </Sc.Title>
      <Typography.Paragraph>{props.description}</Typography.Paragraph>
    </Sc.Card>
  );
};
