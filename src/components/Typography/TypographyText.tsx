import { classNames } from 'helpers/classNames';
import type { TypographyCommonProps } from './Typography';
import * as Sc from './Typography.styled';

export type TypographyTextProps = TypographyCommonProps &
  React.HTMLAttributes<HTMLSpanElement>;

export const TypographyText = ({
  size = 'standard',
  weight = 'normal',
  align = 'initial',
  className,
  children,
  ...rest
}: TypographyTextProps): JSX.Element => {
  return (
    <Sc.FlowContent
      as="span"
      className={classNames('TypographyText-root', className)}
      size={size}
      weight={weight}
      align={align}
      {...rest}
    >
      {children}
    </Sc.FlowContent>
  );
};
