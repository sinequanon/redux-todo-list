import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './components/Root';


const reduxRender = () => {
     render(
          <AppContainer>
            <Root/>
          </AppContainer>, 
          document.querySelector('#root'));
}

reduxRender();

if (module.hot) {
    console.log('going hot');
    module.hot.accept('./components/Root', () => {
        const HotRoot = require('./components/Root').default;
        render(<AppContainer><HotRoot/></AppContainer>,
            document.querySelector('#root'));
    });
}
