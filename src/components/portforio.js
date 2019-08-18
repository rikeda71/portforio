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
import { Info, Note, Laptop, Mail } from '@material-ui/icons';

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
            drawerLabels: window.innerWidth >= 750 ? true : false,
        };
    };

    handleChange = (_, activeIndex) => this.setState({ activeIndex });

    createTabs() {
        const { activeIndex } = this.state;
        return (
            <div class="tabs" >
                <Tabs
                    variant={"fullWidth"}
                    centered
                    value={activeIndex}
                    indicatorColor="primary"
                    onChange={this.handleChange}
                >
                    <Tab icon={<Info />} label={this.state.drawerLabels ? "About" : ""} disableRipple />
                    <Tab icon={<Note />} label={this.state.drawerLabels ? "Publications" : ""} disableRipple />
                    <Tab icon={<Laptop />} label={this.state.drawerLabels ? "Skill" : ""} disableRipple />
                    <Tab icon={<Mail />} label={this.state.drawerLabels ? "Contact" : ""} disableRipple />
                </Tabs>
                <TabPanel value={activeIndex} index={0}>
                    {this.state.height}
                    <About />
                </TabPanel>
                <TabPanel value={activeIndex} index={1}>
                    <Publications />
                </TabPanel>
                <TabPanel value={activeIndex} index={2}>
                    <Skill />
                </TabPanel>
                <TabPanel value={activeIndex} index={3}>
                    <Contact />
                </TabPanel>
            </div>
        );
    };

    render() {
        return (
            <div id="contents">
                <header position="fixed">
                    <Typography variant="h4">
                        Ryuya's Portforio
                    </Typography>
                </header>
                {this.createTabs()}
            </div>
        );
    };
};


export default Portforio;
