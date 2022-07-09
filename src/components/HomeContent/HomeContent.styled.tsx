import styled from 'styled-components';
import { Typography } from 'components/Typography';

export const Figure = styled.figure`
	img {
		max-width: 30%;
		margin: 0 auto;
		padding: 20px 0;
		text-align: center;
		display: block;
	}

	figcaption {
		color: #9ca3af;
		text-align: center;
		font-size: 11px;

		a {
			color: #9ca3af;
			text-decoration: underline;
		}
	}
`;

export const Heading = styled(Typography.Title)`
	margin: 24px 0;
`;
