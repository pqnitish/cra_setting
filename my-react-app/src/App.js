import { useState } from 'react';
import './App.css';

function App() {
  const[count , setCount] = useState(0);

  return (
    <div >
      <h2>Count: {count}</h2>
      <button onClick={()=>setCount(count +1)}>Increase by 1</button>
    </div>
  );
}

export default App;
