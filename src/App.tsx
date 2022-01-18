import { useEffect } from "react";
import SearchPanel from "./containers/SearchPanel";
import { appleMovies } from "./services/api";

function App() {
  useEffect(() => {
    console.log(appleMovies());
  }, []);
  return (
    <div className="App">
      <SearchPanel />
    </div>
  );
}

export default App;
