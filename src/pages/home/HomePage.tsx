import { Counter } from 'components/Counter';
import { HomeWelcome } from 'components/HomeWelcome';
import { SingleColumnLayout } from 'components/Layouts';

const HomePage = () => {
	return (
		<SingleColumnLayout
			renderHeader={null}
			renderMain={
				<>
					<HomeWelcome />
					<Counter />
				</>
			}
			renderFooter={null}
		/>
	);
};

export default HomePage;
