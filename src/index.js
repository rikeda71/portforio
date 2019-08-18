import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import * as serviceWorker from './serviceWorker';
import Portforio from './components/portforio';

const theme = createMuiTheme({
    props: {
        MuiTypography: {
            variantMapping: {
                h1: 'h2',
                h2: 'h2',
                h3: 'h3',
                h4: 'h4',
                h5: 'h5',
                h6: 'h6',
                subtitle1: 'h2',
                subtitle2: 'h2',
                body1: 'span',
                body2: 'span',
            },
        },
    },
});

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
            <div className="contents">
                <MuiThemeProvider theme={theme}>
                    <Portforio />
                </MuiThemeProvider>
                <MyFooter />
            </div>
        </Container>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
