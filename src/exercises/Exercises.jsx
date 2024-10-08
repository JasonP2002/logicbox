import React, { useState, useEffect } from 'react';
import { Tab, Tabs } from '@mui/material';

import ExercisesOne from '../exercises/ExercisesOne';
import ExercisesTwo from '../exercises/ExercisesTwo';
import ExercisesThree from '../exercises/ExercisesThree';
import ExercisesFour from '../exercises/ExercisesFour';

let tabs = [];

const refillTabs = (numExs) => {
    tabs = []
    for (let i = 0; i < numExs; i++) {
        tabs.push(<Tab key={i.toString()} label={(i).toString()} />)
    }
}
const updateExs = (props) => {
    let new_exs = []
    switch (props.tabIndex) {
        case 1:
            new_exs = ExercisesOne;
            break;
        case 2:
            new_exs = ExercisesTwo;
            break;
        case 3:
            new_exs = ExercisesThree;
            break;
        case 4:
            new_exs = ExercisesFour;
            break;
        default:
            new_exs = [];
            break;
    }
    refillTabs(new_exs.length)
    props.setEx((new_exs[0])[0])
    props.setExAssums((new_exs[0])[1])
    return new_exs
}

const changeExIndex = (newIndex, exLength, setExIndex) => {
    if (newIndex < 0 || newIndex > exLength - 1) {
        return
    }
    setExIndex(newIndex)
}

const updateNewEx = (props, ex) => {
    props.setEx(ex[0])
    props.setExAssums(ex[1])
}

const formatEx = (ex) => {
    let formattedEx = ''
    for (let i = 0; i < ex.length; i++) {

    }
    return formattedEx
}
const Exercises = (props) => {
    const [exs, setExs] = useState([['', '']])
    const [exIndex, setExIndex] = useState(0)

    useEffect(() => {
        setExs(updateExs(props))
        setExIndex(0)
    }, [props.tabIndex])

    useEffect(() => {
        updateNewEx(props, exs[exIndex])
    }, [exIndex])

    return (
        <div className="exercise">
            <h2>Exercises</h2>
            <Tabs value={exIndex} textColor="inherit" indicatorColor="inherit" onChange={(_, newExIndex) => changeExIndex(newExIndex, exs.length, setExIndex)} variant="scrollable">
                    {tabs}
            </Tabs>

            <h3>Prove</h3>
            <h3 className="proof-ex">{(exs[exIndex])[0]}</h3>
            {exIndex == 0 ? <></> : <h3>With {exs[exIndex][1].length == 0 ? "No Prior Assumptions" : "Assumptions"}</h3>}
            <h3 className="proof-ex">{((exs[exIndex])[1]).length > 1 ? ((exs[exIndex])[1]).join(', ') : ((exs[exIndex])[1])}</h3>
        </div>
    )
}

export default Exercises;