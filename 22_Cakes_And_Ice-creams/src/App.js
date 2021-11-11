import { Provider} from 'react-redux';
import store from './redux/store';
import CakeContainer from './components/CakeContainer';
import './App.css';
import CakeContainerHooks from './components/CakeContainerHooks';

function App() {
  return (
    <Provider store={store} className="app">
      <div className="App">
        <CakeContainer />
        <CakeContainerHooks />
      </div>
    </Provider>
  );
}

export default App;
