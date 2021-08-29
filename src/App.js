import {useState} from 'react';
import './App.css';
import { createApi } from 'unsplash-js';
import SearchBar from './components/SearchBar.jsx'
import CardList from './components/CardList.jsx'

function App() {

  const unsplash = createApi({
    accessKey: '824wWpPEQSwuzplgKu4nCmcRF55zVIMAyn7_8E7cepU'
  });

  const [searchText, setSearchText] = useState('')
  const [pics, setPics] = useState([])

  const searchPhotos = async (e) => {
    if (e) {
      e.preventDefault()
    }
    unsplash.search.getPhotos({query: searchText}).then(result => {
      if(result.errors) {
        //handle error here
        console.log('error occurred: ', result.errors[0]);
      } else {
        // handle success here
        const photos = result.response;
        console.log(photos.results);
        setPics(photos.results);
      }
    })
  };

  return (
    <div className="App">
      <SearchBar {...{setSearchText, searchPhotos}} />
      <CardList {...{pics}} />
    </div>
  );
}

export default App;
