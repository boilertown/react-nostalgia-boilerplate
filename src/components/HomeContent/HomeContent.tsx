import { Container } from 'components/Container';
import * as Sc from './HomeContent.styled';
import hello_img from 'assets/images/hello.svg';

export const HomeContent = () => {
	return (
		<Container>
			<Sc.HelloImg src={hello_img} alt="" />
			<Sc.Title weight="bold" align="center">
				Welcome to Boilertowns
			</Sc.Title>
		</Container>
	);
};
