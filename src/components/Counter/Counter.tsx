import { useState } from 'react';
import * as Sc from './Counter.styled';

export const Counter = () => {
	const [count, setCount] = useState(0);

	return (
		<Sc.CounterWrap>
			<Sc.Button onClick={() => setCount((prevCount) => prevCount + 1)}>
				Count: <strong>{count}</strong>
			</Sc.Button>
		</Sc.CounterWrap>
	);
};
