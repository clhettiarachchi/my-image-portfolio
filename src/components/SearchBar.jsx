import {React} from 'react';
import "./SearchBar.css";

function SearchBar({setSearchText, searchPhotos}) {

  const handleChange = (e) => {
    setSearchText(e.target.value)
  };

  const handleSearch = () => {
    searchPhotos()
  }

  return (
    <>
      <div className="search-bar">
        <input type="text" onChange={handleChange} onKeyPress={e => { if (e.key === 'Enter') handleSearch() }} />
        <button class="search-btn" onClick={handleSearch}>Find</button>
      </div>
    </>
  );
}

export default SearchBar;