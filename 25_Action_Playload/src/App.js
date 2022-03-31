import { Provider} from 'react-redux';
import store from './redux/store';
import CakeContainer from './components/CakeContainer';
import CakeContainerHooks from './components/CakeContainerHooks';
import IceCreamContainer from './components/IceCreamContainer';
import IceCreamContainerHooks from './components/IceCreamContainerHooks';
import './App.css';

function App() {
  return (
    <Provider store={store} className="App">
        <CakeContainer />
        <CakeContainerHooks />
        <hr/>
        <IceCreamContainer />
        <IceCreamContainerHooks />

    </Provider>
  );
}

export default App;
