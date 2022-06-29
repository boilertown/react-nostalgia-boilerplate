import * as Sc from './HomeGrid.styled';

interface HomeGridProps {
  children: React.ReactNode;
}

export const HomeGrid = (props: HomeGridProps) => {
  return <Sc.Grid>{props.children}</Sc.Grid>;
};
