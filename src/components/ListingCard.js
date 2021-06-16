import React, { useState} from "react";

function ListingCard({listing, removeListing}) {
  // console.log(listing)
  const {id, description, image, location} = listing

  const [isFavorited, setIsFavorited] = useState(false)


  // const handleFavorited = () => {
  //   setIsFavorited(isFavorited => !isFavorited)
  // }
   function handleTrash() {

     fetch(`http://localhost:6001/listings/${id}`, {
       method: "DELETE",
     })
    
     removeListing(id)
       
    }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
       
          <button 
            className={isFavorited ? "emoji-button favorite active" : "emoji-button favorite"} onClick={() => setIsFavorited(isFavorited =>!isFavorited)}>{isFavorited ? "★" : "☆"} 
          </button>
       
        <strong>{description}</strong>
        <span> · {location}</span>
        <button 
          className="emoji-button delete"
          onClick={handleTrash}
          id={id}>🗑
        </button>
      </div>
    </li>
  );
}

export default ListingCard;
