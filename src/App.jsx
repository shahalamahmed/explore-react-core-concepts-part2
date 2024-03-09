
import './App.css'
import Counter from './counter'
import Team from './team'
import Users from './user'

function App() {
  
  function handleClick (){
    alert('button click')
  }
  const addToFive = (num) =>{
    alert(num + 5)
  }

  return (
    <>
      
      <h1>React Core Concepts 2</h1>

      <Users></Users>
      <Team></Team>
       <Counter></Counter>
      <button onClick={handleClick}>click me </button>
      <button onClick={() => {alert('second')}}>second</button>
      <button onClick={() =>{
        addToFive(4)
      }}>third</button>
      
    </>
  )
}

export default App
