import React from 'react'
import useFetch from "../Hooks/useFetch"


const MovieList = ({apiPath}) => {
const test = useFetch(apiPath);
 console.log(test);

  return (
    <main className='min-h-screen'>{apiPath}
    
    </main>
  )
}

export default MovieList