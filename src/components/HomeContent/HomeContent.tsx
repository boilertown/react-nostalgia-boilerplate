import * as Sc from './HomeContent.styled';

interface HomeContentProps {
  children: React.ReactNode;
}

export const HomeContent = (props: HomeContentProps) => {
  return <Sc.Wrapper>{props.children}</Sc.Wrapper>;
};
