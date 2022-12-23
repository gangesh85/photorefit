import React, { useEffect, useState } from 'react'

function HookInterval() {
    const [count, setCount] = useState(0)

    const tick = () => {
        setCount(prevCount => prevCount + 1)
    }

    useEffect(() => {
        const interval = setInterval(tick, 1000)
        return () => {
            clearInterval(interval)
        }
    },[count])

  return (
    <div>
        {count}
    </div>
  )
}

export default HookInterval