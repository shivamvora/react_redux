import Contacts from './components/contacts/Contacts';
import Navbar from './components/elements/Navbar';
import { Provider } from 'react-redux'
import store from './store'
import './styles/App.scss';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <div className="container">
          <div className="py-3">
            <Contacts />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
