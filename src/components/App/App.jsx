import './App.css';
import React, { useState, useEffect } from 'react';

import picsumApi from 'Api/picsumApi';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import ButtonImgLimit from 'components/ButtonImgLimit/ButtonImgLimit';


function App() {
  const [query, setQuery] = useState([]);
  const [page, setPage] = useState(1);
  const [limitImagesList, setLimitImagesList] = useState(20);
  const [favouriteImg, setFavouriteImg] = useState([]);

  useEffect(() => {
    picsumApi(page, limitImagesList).then(query => setQuery(query));
    // console.log('++');
  }, [page, limitImagesList]);

  const newLimitImg = (limit) => {
    setLimitImagesList(limit);
  };

  const add = (id,addImg, alt) => {
    const updateFavourite = {id:id, img: addImg, author: alt }
    setFavouriteImg([...favouriteImg, updateFavourite]);
    console.log('favouriteImg:',favouriteImg);

  };

  return (
    <div className="App">
      <ImageGallery query={query} add={add} />
      <ButtonImgLimit onClick={newLimitImg} limit={20} />
      <ButtonImgLimit onClick={newLimitImg} limit={40} />
    </div>
  );
}

export default App;
