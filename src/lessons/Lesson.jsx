import React from 'react';
import LessonZero from '../lessons/LessonZero';
import LessonOne from '../lessons/LessonOne';
import LessonTwo from '../lessons/LessonTwo';
import LessonThree from '../lessons/LessonThree';
import LessonFour from '../lessons/LessonFour';

const Lesson = (props) => {
    return (
        <div className="lesson">
            {props.index == 0 && LessonZero}
            {props.index == 1 && LessonOne}
            {props.index == 2 && LessonTwo}
            {props.index == 3 && LessonThree}
            {props.index == 4 && LessonFour}
        </div>
    )
}
export default Lesson;