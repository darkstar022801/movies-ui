import React from 'react'

export type MovieType = {
  id: number
  name: string
}

function Movie({ id, name }: MovieType): JSX.Element {
  return (
    <h1>
      {id}:&nbsp;{name}
    </h1>
  )
}

export default Movie
