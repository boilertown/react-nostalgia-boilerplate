/* eslint-disable react/no-children-prop */
import { History, createBrowserHistory } from 'history';
import { useLayoutEffect, useState } from 'react';
import { Router } from 'react-router-dom';

export const history = createBrowserHistory({ window });

interface BrowserRouterProps {
  basename?: string;
  children?: React.ReactNode;
  history: History;
}

/**
 * A `<Router>` that accepts a pre-instantiated history object. We must do this because `<OAuthProvider>`
 * needs to access router navigator from outside the Router Context to redirect after callback done and
 * prevent re-rendering when routes change.
 *
 * React Router has provided [unstable_HistoryRouter](https://github.com/remix-run/react-router/issues/8264#issuecomment-991271554)
 * to solve the problem, but we'd rather use our own component as a workaround.
 *
 * @see https://github.com/remix-run/react-router/issues/8264
 * @see https://github.com/remix-run/react-router/blob/main/packages/react-router-dom/index.tsx#L222
 */
export const BrowserRouter = ({
  basename,
  children,
  history,
}: BrowserRouterProps) => {
  const [state, setState] = useState({
    action: history.action,
    location: history.location,
  });

  useLayoutEffect(() => history.listen(setState), [history]);

  return (
    <Router
      basename={basename}
      children={children}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    />
  );
};
