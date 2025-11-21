import { useEffect, useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ball from "./assets/ball.jpg"

function App() {
  const [posx, setPosx] = useState(0);
  const [posy, setPosy] = useState(0);
  const [dirx, setDirx] = useState(1);
  const [diry, setDiry] = useState(1);
  const imgRef = useRef(null);
  const bwidth = 300;
  const bheight = 200;
  const speed = 1;

  useEffect(() => {
    const interval = setInterval(() => {
      if (imgRef.current) {
        const rect = imgRef.current.getBoundingClientRect();
        if (rect.bottom >= window.innerHeight || rect.top <= 0) {
          setDiry(prev => -prev);
        }
        if (rect.left <= 0 || rect.right >= window.innerWidth)
        {
          setDirx(prev => -prev);
        }
          setPosx(prev => prev + dirx * speed);
        setPosy(prev => prev + diry * speed);
      }
    }, 1)
    return () => clearInterval(interval)
  }, [dirx, diry])

  return (
    <>
      <img src={ball} style={{
        position: "absolute",
        top: posy,
        left: posx,
        width: bwidth,
        height: bheight
      }} ref={imgRef} />
    </>
  )
}

export default App