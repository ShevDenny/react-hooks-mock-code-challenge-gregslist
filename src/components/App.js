import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [sort, setSort] = useState(false)
  
  useEffect(() => {
    
    fetch("http://localhost:6001/listings")
    .then((res) => res.json())
    .then(listingInfo => setListings(listingInfo))
    
  }, [])

  const handleSort = () =>{    
    setSort(!sort)
 }

function removeListing(id){
    const newListing = listings.filter(listing => listing.id  !== id)
    setListings(newListing)
  }
const filteredListings = listings.filter(listing => {
  return (listing.description.toLowerCase().includes(searchTerm.toLowerCase()))
  
})

const sortedList = () => {
  if (sort){
    return filteredListings.sort((list1, list2) =>list1.location.localeCompare(list2.location))

} else {
  return filteredListings
}
}


  return (
    <div className="app">
      <Header setSearchTerm={setSearchTerm} searchTerm={searchTerm} handleSort={handleSort} />
      <ListingsContainer listings={sortedList()} removeListing={removeListing}/>
    </div>
  );
}

export default App;
