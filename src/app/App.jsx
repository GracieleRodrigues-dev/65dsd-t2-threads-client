import Form from '../modules/Form';
import TrafficGrid from '../modules/TrafficGrid';
import useStore from '../store';
import { Wrapper, Container } from './App.styles';

const App = () => {
  const simulation = useStore(state => state.simulation);

  return (
    <Wrapper>
      <Container>
        <Form />
        <TrafficGrid key={simulation?.id} />
      </Container>
    </Wrapper>
  );
};

export default App;
