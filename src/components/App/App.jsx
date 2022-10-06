import './App.css';
import React, { useState, useEffect } from 'react';

import picsumApi from 'Api/picsumApi';
import ImageGallery from 'components/ImageGallery/ImageGallery';

function App() {
  const [query, setQuery] = useState([]);

  useEffect(() => {
    picsumApi(1).then(query => setQuery(query));
    console.log('++');
  }, []);


  return (
    <div className="App">
      <ImageGallery
        query={query}
      />
    </div>
  );
}

export default App;
