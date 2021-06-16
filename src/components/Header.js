import React, {useState} from "react";
import Search from "./Search";

function Header({setSearchTerm, searchTerm, handleSort}) {
  // const [locationSort, setLocationSort] = useState(false)


  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
      <button onClick={handleSort}>Sort by Location</button>
    </header>
  );
}

export default Header;
