import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import { Accountbox } from './accountbox';



const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
`;

function App() {
  return (
    <AppContainer><Accountbox>
    </Accountbox></AppContainer>
    
  );
}

export default App;