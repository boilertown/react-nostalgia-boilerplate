import { Counter } from 'components/Counter';
import * as Sc from './HomeContent.styled';
import launch_img from 'assets/images/launch.png';

export const HomeContent = () => {
	return (
		<>
			<Sc.Figure>
				<img src={launch_img} alt="A rocket is being launched" />
				<figcaption>
					Illustration by{' '}
					<a href="https://icons8.com/illustrations/author/zD2oqC8lLBBA">
						Icons 8
					</a>
				</figcaption>
			</Sc.Figure>
			<Sc.Heading size="big" weight="bold" align="center">
				Welcome to Boilertowns
			</Sc.Heading>
			<Counter />
		</>
	);
};
