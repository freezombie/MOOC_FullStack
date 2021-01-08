import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    // tallenna napit omaan tilaansa
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const increment = (value) => {
        if(value === "good") {
            setGood(good + 1)
        } else if (value === "bad") {
            setBad(bad + 1)
        } else {
            setNeutral(neutral + 1)
        }
    }

    return (
        <div>
            <Feedback increment={increment}/>
            <Statistics good={good} neutral={neutral} bad={bad}/>
        </div>
    )
}

const Feedback = ({increment}) => {
    return(
        <div>
            <h1>Give Feedback</h1>
            <Button increment={increment} text="Good"/>
            <Button increment={increment} text="Neutral"/>
            <Button increment={increment} text="Bad"/>
        </div>
    )
}

const Statistics = ({good,neutral,bad}) => {
    let all = good + neutral + bad;
    return(
        <div>
            <h1>Statistics</h1>
            {all ? 
            <>
                <table>
                    <tbody>
                        <StatisticLine text="Good" value={good}/>
                        <StatisticLine text="Neutral" value={neutral}/>
                        <StatisticLine text="Bad" value={bad}/>
                        <StatisticLine text="All" value={all}/>
                        <StatisticLine text="Avg" value={(good-bad)/all}/>
                        <StatisticLine text="Positive" value={(good/all)*100}/>
                    </tbody>
                </table>
            </> : <p>No feedback given</p>}
        </div>
    )
}

const StatisticLine = ({text,value}) => {
    return(
        <>
            <tr>
                <td>{text}</td>
                <td>{value} {(text === "Positive") ? '%' : ''}</td>
            </tr>
        </>       
    )
}

const Button = ({increment,text}) => {
    return (
        <button onClick={() => increment(text.toLowerCase())}>{text}</button>
    )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)