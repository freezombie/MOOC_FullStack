import React from 'react'

const Persons = ({persons,filter}) => {
    return (
        <div>
            {persons.filter(person =>
            person.name.match(new RegExp(filter, 'i'))
            ).map(person => 
                <p key={person.name}>{person.name} {person.number}</p>
            )}
        </div>
    )
}

export default Persons