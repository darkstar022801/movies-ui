import React from 'react'
import useData from '../hooks/useData'
import Movie, { MovieType } from './Movie'

function Movies() {
  const { data } = useData({ url: 'movie' })
  const movies = data ? (data as unknown as MovieType[]) : []

  return (
    <>
      {movies.map((movie) => {
        const { id, name } = movie
        return <Movie key={id} id={id} name={name} />
      })}
    </>
  )
}

export default Movies
