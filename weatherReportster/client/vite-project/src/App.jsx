import axios from 'axios'
import React, { useState, useEffect } from 'react'

function App() {
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('/api')
      setData(result.data)
      setData(result.data)
    }
    fetchData();
  });

  console.log(data);

  return (
    <>
      <h2>Lets try server Call</h2>
    </>
  )
}

export default App
