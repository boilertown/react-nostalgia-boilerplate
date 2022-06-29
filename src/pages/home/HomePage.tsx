import { FeatureCard } from 'components/FeatureCard';
import { HomeContent } from 'components/HomeContent';
import { HomeGrid } from 'components/HomeGrid';
import { SingleColumnLayout } from 'components/Layouts';
import { Typography } from 'components/Typography';
import hello_gif from 'assets/images/hello.gif';

const HomePage = () => {
  return (
    <SingleColumnLayout
      renderHeader={null}
      renderMain={
        <HomeContent>
          <img className="hello" src={hello_gif} alt="" />
          <Typography.Title weight="bold" align="center">
            Welcome to Boilertowns
          </Typography.Title>
          <HomeGrid>
            <FeatureCard
              title="Typescript"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              className="gradient-0"
            />
            <FeatureCard
              title="Static Code Analysis & Auto Format"
              description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
              className="gradient-1"
            />
          </HomeGrid>
        </HomeContent>
      }
      renderFooter={null}
    />
  );
};

export default HomePage;
