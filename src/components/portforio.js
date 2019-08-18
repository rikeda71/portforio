/* eslint-disable react/prop-types */
import React, { useState } from "react";
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


function Portforio(props) {
    const [index, onChange] = useState(0);
    return (
        // ページが小さくなったら，tab下の文字を表示しないようにする
        <div class="content">
            <header position="fixed">
                <Typography variant="h4">
                    Ryuya's Portforio
                </Typography>
                <Tabs
                    variant={"fullWidth"}
                    centered
                    value={index}
                    indicatorColor="primary"
                    onChange={(e, val) => onChange(val)}
                >
                    <Tab icon={<Info />} label="About" disableRipple />
                    <Tab icon={<Note />} label="Publications" disableRipple />
                    <Tab icon={<Laptop />} label="Skill" disableRipple />
                    <Tab icon={<Mail />} label="Contact" disableRipple />
                </Tabs>
            </header>
            <TabPanel value={index} index={0}>
                <About />
            </TabPanel>
            <TabPanel value={index} index={1}>
                <Publications />
            </TabPanel>
            <TabPanel value={index} index={2}>
                <Skill />
            </TabPanel>
            <TabPanel value={index} index={3}>
                <Contact />
            </TabPanel>
        </div>
    );
};


export default Portforio;
