import React from 'react';
import {Provider} from 'react-redux';
import AppNavigator from './navigation/appNavigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import store from './store/slices';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <AppNavigator />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
