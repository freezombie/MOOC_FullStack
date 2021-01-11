import React from 'react'
import Header from './Header'
import Content from './Content'
import Total from './Total'

const Course = ({courseInfo}) => {
    return  (
        <div>
            <Header course={courseInfo} />
            <Content parts={courseInfo.parts} />
            <Total parts={courseInfo.parts} />
        </div>
    )
}

export default Course;