import { Provider} from 'react-redux';
import store from './redux/store';
import CakeContainer from './components/CakeContainer';
import './App.css';
import CakeContainerHooks from './components/CakeContainerHooks';
import IceCreamContainer from './components/IceCreamContainer';
import IceCreamContainerHooks from './components/IceCreamContainerHooks';

function App() {
  return (
    <Provider store={store} className="app">
      <div className="App">
        <CakeContainer />
        <CakeContainerHooks />
        <hr/>
        <IceCreamContainer />
        <IceCreamContainerHooks />
      </div>
    </Provider>
  );
}

export default App;
