import { useEffect, useRef, useState } from "react";
import ball from "./assets/ball.jpg";

function App() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const dir = useRef({ x: 1, y: 1 });

  const speed = 3;
  const width = 250;
  const height = 200;
  const animate = () => {
    setPos(prev => {
      let x = prev.x + dir.current.x * speed;
      let y = prev.y + dir.current.y * speed;

      const maxX = window.innerWidth - width;
      const maxY = window.innerHeight - height;

      // coliziune orizont
      if (x <= 0) {
        x = 0;
        dir.current.x = 1;
      } else if (x >= maxX) {
        x = maxX;
        dir.current.x = -1;
      }

      // coliziune verticală
      if (y <= 0) {
        y = 0;
        dir.current.y = 1;
      } else if (y >= maxY) {
        y = maxY;
        dir.current.y = -1;
      }

      return { x, y };
    });

    requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestAnimationFrame(animate);
  }, []);

  return (
    <img
      src={ball}
      style={{
        position: "absolute",
        left: pos.x,
        top: pos.y,
        width,
        height,
        borderRadius: "8px",
      }}
      className="rounded-md"
    />
  );
}

export default App;
