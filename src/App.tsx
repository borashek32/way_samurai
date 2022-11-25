import React, {useEffect, useState} from 'react';
import './App.css';

type PostType = {
  id: number
  body: string
  title: string
  userId: number
}

function App() {
  const [state, setState] = useState<PostType[]>([])
  console.log(state)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setState(json))
  }, [])

  const deleteHandler = () => {
    setState([])
  }
  const postsHandler = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setState(json))
  }

  return (
    <div className="App">
      <button onClick={deleteHandler}>delete</button>
      <button onClick={postsHandler}>show posts</button>
      <ul>
        {state.map(el => {
          return (
            <li key={el.id}>
              <span>{el.id}</span>
              <span>{el.title}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default App;
