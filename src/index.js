import React from 'react';
import { AppRegistry } from 'react-native';
import { AppContainer } from 'react-hot-loader';
import App from './components/app';

const render = Component => () => (
  <AppContainer>
    <Component/>
  </AppContainer>
);

// App registration and rendering
AppRegistry.registerComponent('MyApp', () => render(App));

// Hot Module Replacement API
if (module.hot) {
  // Rather than watch a specific file, watch all the things
  module.hot.accept();

  AppRegistry.registerComponent('ReactNavigationExamples', () => render(App));
}

AppRegistry.runApplication('MyApp', {
  rootTag: document.getElementById('react-root'),
});
