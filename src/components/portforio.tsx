import React, { useState, Dispatch } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import About from './about';
import Publications from './publication';
import Skill from './skill';
import Contact from './contact';
import { Info, Description, Laptop, Mail } from '@material-ui/icons';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';
import { SvgIconTypeMap } from '@material-ui/core';

type PortforioTab = {
  component: React.FC;
  icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;
  label: string;
  linkTo: string;
};

type tabProps = {
  index: number;
  setIndex: Dispatch<number>;
};

const tabs: React.FC<tabProps> = (props: tabProps) => {
  const activeIndex = props.index;
  const portforioTabs: Array<PortforioTab> = [
    { component: About, icon: Info, label: 'About', linkTo: '/' },
    {
      component: Publications,
      icon: Description,
      label: 'Publications',
      linkTo: '/publications',
    },
    { component: Skill, icon: Laptop, label: 'Skill', linkTo: '/skills' },
    { component: Contact, icon: Mail, label: 'Contacts', linkTo: '/contancts' },
  ];
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className='tabs'>
        <Tabs
          variant={'fullWidth'}
          centered
          value={activeIndex}
          indicatorColor='primary'
          onChange={(_, activeIndex) => props.setIndex(activeIndex)}
        >
          {portforioTabs.map((tab) => {
            return (
              <Tab
                key={tab.label}
                icon={<tab.icon />}
                label={tab.label}
                component={Link}
                to={tab.linkTo}
                disableRipple
              />
            );
          })}
        </Tabs>
        <Switch>
          <Route exact path='/' component={About} />
          {portforioTabs.slice(1).map((tab) => {
            return (
              <Route
                path={tab.linkTo}
                component={tab.component}
                key={tab.label}
              />
            );
          })}
          <Route component={About} />
        </Switch>
      </div>
    </Router>
  );
};

const Portforio: React.FC = () => {
  const [index, setIndex] = useState<number>(0);
  return (
    <div className='contents'>
      <header id='header-position'>
        <Typography variant='h4'>{"Ryuya's Page"}</Typography>
      </header>
      {tabs({ index: index, setIndex: setIndex })}
    </div>
  );
};

export default Portforio;
