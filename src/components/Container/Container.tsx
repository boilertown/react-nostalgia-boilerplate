import * as Sc from './Container.styled';

interface CenterContainerProps {
	children: React.ReactNode;
}

export const Container = (props: CenterContainerProps) => {
	return <Sc.Container>{props.children}</Sc.Container>;
};
