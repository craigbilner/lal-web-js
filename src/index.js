import React from 'react';
import { AppRegistry } from 'react-native';
import { AppContainer } from 'react-hot-loader';
import App from './components/app';

const render = Component => () => (
  <AppContainer>
    <Component/>
  </AppContainer>
);

const appName = 'LalApp';
const register = () => AppRegistry.registerComponent(appName, () => render(App));

if (module.hot) {
  // Rather than watch a specific file, watch all the things
  module.hot.accept();

  register();
}

register();
AppRegistry.runApplication(appName, {
  rootTag: document.getElementById('react-root'),
});
