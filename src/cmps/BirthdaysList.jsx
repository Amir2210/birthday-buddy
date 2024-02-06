import { useState } from 'react'

export function BirthdaysList({ data }) {
  const [people, setPeople] = useState(data)
  return (
    <>
      <h3>{people.length} Birthdays Today</h3>
      <ul>
        {people.map(person =>
          <li className='person' key={person.id}>
            <img className='img' src={person.image} alt="person img" />
            <div>
              <h4>{person.name}</h4>
              <p>{person.age}</p>
            </div>
          </li>)}
      </ul>
    </>
  )
}