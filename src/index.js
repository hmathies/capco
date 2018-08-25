import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './app/App';
import registerServiceWorker from './registerServiceWorker';


const rootElement = document.getElementById('root');

let render = () => {
    ReactDOM.render(<App />, rootElement)
}
if (module.hot) {
    module.hot.accept('./app/App', () => {
        setTimeout(render)
    })
}
render();
registerServiceWorker();
