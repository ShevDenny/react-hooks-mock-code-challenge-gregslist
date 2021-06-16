import React from "react";
// import ListingCard from "./ListingCard";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, removeListing}) {
  // console.log(listings)
  const listingDisplay = listings.map((listing) => {
    // console.log(listing)
    return <ListingCard

      key={listing.id}
      listing={listing}
      removeListing={removeListing}/>
  })

  return (
    <main>
      <ul className="cards">
        {listingDisplay}
      </ul>
    </main>
  );
}

export default ListingsContainer;
