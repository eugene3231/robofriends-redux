import React from 'react'; // does dom manipulation for us
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import { searchRobots } from './reducers';
import 'tachyons';


const store = createStore(searchRobots); // COMBINES REDUCERS

ReactDOM.render( 
              <Provider store={store}>
                <App />
              </Provider>
              // <React.StrictMode>
              //   <App />
              // </React.StrictMode>
              ,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
