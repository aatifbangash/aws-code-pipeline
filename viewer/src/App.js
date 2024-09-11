import "./App.css";
import { useEffect, useState } from "react";
import Viewer from "./Components/Viewer";

function App() {
  const [color, setColor] = useState("bccae4");

  const style = {
    background: `linear-gradient(#${color}, #fffafa)`,
    height: "100%",
    width: "100%",
  };

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data.color) {
        // recieve color from host
        setColor(event.data.color);
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <div className="App" style={style}>
      <Viewer />
    </div>
  );
}

export default App;
