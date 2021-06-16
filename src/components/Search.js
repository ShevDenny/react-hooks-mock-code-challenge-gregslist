import React from "react";

function Search({searchTerm, setSearchTerm}) {
  // const [search, setSearch] = useState("")

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   setSearch(searchTerm);
  // }

  return (
    <form className="searchbar">
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="submit" >🔍</button>
    </form>
  );
}

export default Search;
