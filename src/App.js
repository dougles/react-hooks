import './App.css';
import Memo from './hooks/Memo';
import State from './hooks/State'
import Ref from './hooks/Ref';
import Callback from './hooks/Callback';

function App() {
  return (
    <div className="App">
      <State /> 
      <br/>
      <Ref />
      <br />
      <Callback />
      <br/>
      <Memo />      
    </div>
  );
}

export default App;
