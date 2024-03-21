import { useState } from 'react';

function App() {
  const [send, setSend] = useState("");
  

  const handleSend = (e) => {
     setSend(e.target.value);
  }

  return (
   <div>
    <form action="">
      <input type="email" />
      <input type="password" name="" id="" required/>
      <button type="submit" onChange={handleSend}>Ingresar</button>
    </form>
   </div>
  )
}

export default App
