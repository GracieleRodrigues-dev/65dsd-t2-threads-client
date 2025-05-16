import Form from '../modules/Form';
import TrafficGrid from '../modules/TrafficGrid';
import { Wrapper, Container } from './App.styles';

const App = () => (
  <Wrapper>
    <Container>
      <Form />
      <TrafficGrid />
    </Container>
  </Wrapper>
);

export default App;
