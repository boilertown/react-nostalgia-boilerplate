import { Helmet } from 'react-helmet-async';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Home | Pipetowns.dev</title>
        <meta name="description" content="Pipetowns application" />
      </Helmet>

      <h1>Welcome to Pipetowns</h1>
    </>
  );
};

export default HomePage;
