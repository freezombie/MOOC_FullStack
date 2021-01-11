import React from 'react'

const PersonForm = ({add,nameChange,numberChange}) => {
    return(
        <form onSubmit={add}>
            <div>
            name: <input onChange={nameChange}/>
            </div>
            <div>
            number: <input onChange={numberChange}/>
            </div>
            <div>
            <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm