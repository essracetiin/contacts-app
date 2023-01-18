import React from 'react'

export default function List({contacts}) {
  return (
    <div>
      <ul>
        {
          contacts.map((contact, i)=><li key={i}>{contact.fullname}</li>)
        }
      </ul>
    </div>
  )
}
