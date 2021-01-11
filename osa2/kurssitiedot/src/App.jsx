import React from 'react'
import Course from './components/Course'

const App = ({courses}) => {
    return (
        <div>
            {courses.map(course =>
            <Course courseInfo={course} />)}
        </div>
    )
}

export default App