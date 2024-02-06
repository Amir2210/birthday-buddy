import { useState } from 'react'

export function BirthdaysList({ data }) {
  const [people, setPeople] = useState(data)
  return (
    <>
      <h3>{people.length} Birthdays Today</h3>
      <ul>
        {people.map(person =>
          <li className='person' key={person.id}>
            <img src={person.image} alt="person img" />
          </li>)}
      </ul>
    </>
  )
}