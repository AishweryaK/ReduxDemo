// /**
//  * @format
//  */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);

import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import App from './App';
import { name as appName } from './app.json';
import { store, sagaMiddleware, persistor } from './srcRTK/storeRTK';
import mySaga from './srcRTK/sagas';
import { PersistGate } from 'redux-persist/integration/react';
// import store from './src/store';

sagaMiddleware.run(mySaga);

const ReduxApp = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor} >
    <App />
    </PersistGate>
  </Provider>
);

AppRegistry.registerComponent(appName, () => ReduxApp);

