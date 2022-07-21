import { SingleColumnLayout } from '../index';

export default {
	title: 'Components/Layouts',
};

export const SingleColumn = () => (
	<SingleColumnLayout
		renderHeader="Header"
		renderMain={
			<>
				<p>Main Content</p>
				<p>
					<i>Inspect element to see more.</i>
				</p>
			</>
		}
		renderFooter="Footer"
	/>
);
