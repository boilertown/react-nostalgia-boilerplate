import { Container } from 'components/Container';
import * as Sc from './HomeContent.styled';
import hello_gif from 'assets/images/hello.gif';

export const HomeContent = () => {
  return (
    <Container>
      <Sc.HelloImg className="hello" src={hello_gif} alt="" />
      <Sc.Title weight="bold" align="center">
        Welcome to Boilertowns
      </Sc.Title>
    </Container>
  );
};
