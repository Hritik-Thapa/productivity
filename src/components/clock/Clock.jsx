import React, { useEffect, useState } from 'react'

const Clock = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);


  useEffect(() => {
    setInterval(() => {
      let time = new Date();
      setHours(time.getHours());
      setMinutes(time.getMinutes());
      setSeconds(time.getSeconds());
    }, 1000)

  }, [])

  if(!hours) return'Loading...'

  function handleFullScreen(){

  }

  return (
    <div>
      {`${hours}:${minutes}:${seconds}`}
      <button onClick={handleFullScreen}>FullScreen</button>
    </div>
  )
}

export default Clock