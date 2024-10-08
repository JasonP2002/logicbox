import React, { useState } from 'react';
import { Tab, Tabs } from '@mui/material';
import Lesson from '../lessons/Lesson';
import Exercises from '../exercises/Exercises';

const default_ex = ''
const default_assums = []

const changeTabIndex = (props, newTabIndex, setTabIndex) => {
    setTabIndex(newTabIndex)
    if (newTabIndex == 0) { //If on tutorial (No exercises)...
        props.setEx(default_ex)
        props.setAssums(default_assums)
    }
}

const Sidebar = (props) => {
    const [tabIndex, setTabIndex] = useState(0)

    return (
        <div className="side-bar">

            <div className="side-bar-title">
                <h2>Lesson</h2>
            </div>

            <Tabs value={tabIndex} textColor="inherit" indicatorColor="inherit"
                onChange={(e, newTabIndex) => changeTabIndex(props, newTabIndex, setTabIndex)} variant="scrollable">
                <Tab label="0" />
                <Tab label="1" />
                <Tab label="2" />
                <Tab label="3" />
                <Tab label="4" />
            </Tabs>
            
            <Lesson index={tabIndex} />
            <br />
            
            {tabIndex != 0 && (
                <Exercises tabIndex={tabIndex} setEx={props.setEx} setExAssums={props.setAssums} />
            )}

        </div>
    );
};

export default Sidebar;