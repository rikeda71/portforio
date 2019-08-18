import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container'
import { MuiThemeProvider } from '@material-ui/core/styles';
import * as serviceWorker from './serviceWorker';
import Portforio from './components/portforio';

function MyFooter() {
    return (
        <footer>
            <div class="footer">
                <Typography >
                    © 2019 Ryuya Ikeda
                </Typography>
            </div>

        </footer >
    );
};


function App() {
    return (
        <Container fixed maxWidth="md">
            <MuiThemeProvider>
                <Portforio />
            </MuiThemeProvider>
            <MyFooter />
        </Container>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
