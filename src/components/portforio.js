/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from 'prop-types';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from '@material-ui/core/Typography';
import About from './about';
import Publications from './publication';
import Skill from './skill';
import Contact from './contact';
import Box from '@material-ui/core/Box';
import { Info, Description, Laptop, Mail } from '@material-ui/icons';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            <Box p={3}>{children}</Box>
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};


class Portforio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
        };
    };

    handleChange = (_, activeIndex) => this.setState({ activeIndex });

    createTabs() {
        const { activeIndex } = this.state;
        return (
            <Router basename={process.env.PUBLIC_URL}>
                <div class="tabs" >
                    {this.props.children}
                    <Tabs
                        variant={"fullWidth"}
                        centered
                        value={activeIndex}
                        indicatorColor="primary"
                        onChange={this.handleChange}
                    >
                        <Tab icon={<Info />}
                            label="About"
                            component={Link}
                            to="/"
                            disableRipple />
                        <Tab
                            icon={<Description />}
                            label="Publications"
                            component={Link}
                            to="/publications"
                            disableRipple />
                        <Tab
                            icon={<Laptop />}
                            label="Skill"
                            component={Link}
                            to="/skill"
                            disableRipple />
                        <Tab
                            icon={<Mail />}
                            label="Contact"
                            component={Link}
                            to="/contact"
                            disableRipple />
                    </Tabs>
                    <Switch>
                        <Route exact path='/about' component={About} />
                        <Route path='/publications' component={Publications} />
                        <Route path='/skill' component={Skill} />
                        <Route path='/contact' component={Contact} />
                        <Route component={About} />
                    </Switch>
                </div>
            </Router>
        );
    };

    render() {
        return (
            <div id="contents">
                <header position="fixed">
                    <Typography variant="h4">
                        Ryuya's Page
                    </Typography>
                </header>
                {this.createTabs()}
            </div>
        );
    };
};


export default Portforio;
