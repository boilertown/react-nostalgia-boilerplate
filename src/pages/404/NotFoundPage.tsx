import { Container } from 'components/Container';
import { SingleColumnLayout } from 'components/Layouts';
import { Typography } from 'components/Typography';

const NotFoundPage = () => {
	return (
		<SingleColumnLayout
			renderHeader={null}
			renderMain={
				<Container>
					<Typography.Title>404 - Not found</Typography.Title>
				</Container>
			}
			renderFooter={null}
		/>
	);
};

export default NotFoundPage;
