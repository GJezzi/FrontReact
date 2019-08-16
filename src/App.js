import React, { Component } from 'react';

import Routes from './routes';
import GlobalStyle from './styles/global';

class App extends Component {
    state = {};

    render() {
        return (
            <>
                <Routes />
                <GlobalStyle />
            </>
        );
    }
}

export default App;
