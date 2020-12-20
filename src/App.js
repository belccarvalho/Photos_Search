import "./App.css";
import Search from "./components/Search";
import { useState } from "react";
import Results from "./components/Results";
import usePhotoSearch from "./components/usePhotoSearch";

function App() {
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [searchOn, setSearchOn] = useState(false);

  const [photos, hasMore] = usePhotoSearch(query, pageNumber, searchOn);
  return (
    <div className="App">
      <Search query={query} setQuery={setQuery} setSearchOn={setSearchOn} />
      <Results 
      photos={photos} 
      hasMore={hasMore} 
      setPageNumber={setPageNumber} />
    </div>
  );
}

export default App;