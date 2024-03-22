import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'

function App() {
  function handleClick(){
    alert('clicked')
  }

  const handleClick2 =()=>{
    alert('clicked again')
  }
  const sum = (a,b)=>{
    alert(a+b);
  }

  return (
    <>
      <h1>React</h1>
      <h2>39-1 Module Introduction And Vite Project Overview</h2>
      <h3>39-2 Different Way To Handle Events In React</h3>
      <button onClick={handleClick} >Click Me</button>
      <button onClick={handleClick2} >Click Again</button>
      <button onClick={()=>{alert('third click')}}>Third Click</button>
      <button onClick={()=>{sum(2,3)}}>Sum</button>

      <h2>39-3 A Simple Introduction To State Change In React</h2>
      <Counter></Counter>

      <h2>39-4 Understand The Concept Of UseState And React Hooks</h2>
      <Team></Team>

      <h3>39-5 (Advanced) Understand The Concept Of UseEffect</h3>
      <Users></Users>

      <h2>39-6 (Recap) Load Dynamic Data, API Call UseEffect Integrate State</h2>
      <Friends></Friends>
    </>
  )
}

export default App
