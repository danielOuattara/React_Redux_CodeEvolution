import { Provider} from 'react-redux';
import store from './redux/store';
import CakeContainer from './components/CakeContainer';
import CakeContainerHooks from './components/CakeContainerHooks';
import IceCreamContainer from './components/IceCreamContainer';
import IceCreamContainerHooks from './components/IceCreamContainerHooks';
import ItemContainer from './components/ItemContainer';



function App() {
  return (
    <Provider store={store} >
        <CakeContainer />
        <CakeContainerHooks />
        
        <hr/>
        <IceCreamContainer />
        <IceCreamContainerHooks />

        <hr />
        <ItemContainer cake/>
        <ItemContainer/>
    </Provider>
  );
}

export default App;
