import { useEffect } from "react";
import { appleMovies } from "./services/api";

function App() {
  
  useEffect(() => {
    console.log(appleMovies())
  }, []);
  return (
    <div className="App">
     Hello
    </div>
  );
}

export default App;
