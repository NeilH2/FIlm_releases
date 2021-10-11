import React from 'react'

const Film = ({children}) => {
    return (
    <>
      <ul>
      <li>
      <h2>{children}</h2>
      </li>
      </ul>
    </>)
}

export default Film;