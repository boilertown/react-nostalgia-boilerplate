import { SingleColumnLayout } from 'components/Layouts';

const NotFoundPage = () => {
  return (
    <SingleColumnLayout
      renderHeader={null}
      renderMain={<h1>404 - Not found</h1>}
      renderFooter={null}
    />
  );
};

export default NotFoundPage;
