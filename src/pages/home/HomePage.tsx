import { HomeContent } from 'components/HomeContent';
import { SingleColumnLayout } from 'components/Layouts';

const HomePage = () => {
  return (
    <SingleColumnLayout
      renderHeader={null}
      renderMain={<HomeContent />}
      renderFooter={null}
    />
  );
};

export default HomePage;
