import styled from 'styled-components';
import { Typography } from 'components/Typography';

export const HelloImg = styled.img`
	max-width: 50%;
	margin: 0 auto;
	padding: 50px 0;
	text-align: center;
	display: block;
`;

export const Title = styled(Typography.Title)`
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	background-image: linear-gradient(to top, #ff6362 0%, #ffc3c3 100%);
`;
