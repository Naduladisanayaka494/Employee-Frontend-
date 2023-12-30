import { useState } from 'react'
import ListEmployeeComponent from './Components/ListEmployeeComponent';


function App() {
  const [count, setCount] = useState(0)

  return (
 <ListEmployeeComponent/>
  );
}

export default App
