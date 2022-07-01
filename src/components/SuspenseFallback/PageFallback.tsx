import { Container } from 'components/Container';
import { SingleColumnLayout } from 'components/Layouts';

export const PageFallback = () => {
  return (
    <SingleColumnLayout
      renderHeader={null}
      renderMain={<Container>Loading...</Container>}
      renderFooter={null}
    />
  );
};
