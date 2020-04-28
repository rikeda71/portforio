import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import * as serviceWorker from './serviceWorker';
import Portforio from './components/portforio';

const MyFooter: React.FC = () => {
  return (
    <footer>
      <div className="footer">
        <Typography>© 2020 Ryuya Ikeda</Typography>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  const theme = createMuiTheme({});
  return (
    <Container fixed maxWidth="md">
      <MuiThemeProvider theme={theme}>
        <Portforio />
      </MuiThemeProvider>
      <MyFooter />
    </Container>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
