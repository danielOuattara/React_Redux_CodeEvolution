import { Provider} from 'react-redux';
import store from './redux/store';
import CakeContainer from './components/CakeContainer';
import './App.css';
import CakeContainerHooks from './components/CakeContainerHooks';
import IceCreamContainer from './components/IceCreamContainer';
import IceCreamContainerHooks from './components/IceCreamContainerHooks';
import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';
function App() {
  return (
    <Provider store={store} className="app">
      <div className="App">
        <CakeContainer />
        <CakeContainerHooks />
        <hr/>
        <IceCreamContainer />
        <IceCreamContainerHooks />

        <hr />
        <ItemContainer cake/>
        <ItemContainer/>

        <hr />

        <UserContainer />

      </div>
    </Provider>
  );
}

export default App;
