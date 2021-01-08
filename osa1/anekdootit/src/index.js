import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
    const [selected, setSelected] = useState(0)
    const [anecdoteData, setAnecdoteData] = useState([]);
    const [mostIndexPos, setMostIndexPos] = useState(0);

    useEffect(() => {
        let newData = [];
        props.anecdotes.forEach(text => {
            const newObject = {text:text,votes:0};
            newData = [...newData,newObject];            
        });
        setAnecdoteData(newData);
    },[props.anecdotes]);

    const getRandomInt = (max) => {
        let value = selected;
        do {
            value = Math.floor(Math.random() * Math.floor(max))
        } while (value === selected)
        return value;
    }

    const vote = () => {
        let newData = [...anecdoteData];
        newData[selected].votes++;
        if(newData[selected].votes > newData[mostIndexPos].votes) {
            setMostIndexPos(selected);
        }
        setAnecdoteData(newData);
        
    }

    return (
        <div>
            <h1>Anecdote of the day</h1>
            <Anecdote index={selected} anectodeData={anecdoteData}/>
            <button onClick={() => setSelected(getRandomInt(anecdotes.length))}>Next Anecdote</button>
            <button onClick={vote}>Vote</button>
            <h1>Anecdote with most votes</h1>
            <Anecdote index={mostIndexPos} anectodeData={anecdoteData}/>
        </div>
    )
}


const Anecdote = ({index, anectodeData}) => {
    return(
        <div>
            <p>"{anectodeData[index] ? anectodeData[index].text : ''}"</p>
            <p>has {anectodeData[index] ? anectodeData[index].votes : ''} votes</p>
        </div>
    )
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)