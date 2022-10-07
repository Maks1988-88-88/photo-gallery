import './App.css';
import React, { useState, useEffect } from 'react';

import picsumApi from 'Api/picsumApi';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import ButtonImgLimit from 'components/ButtonImgLimit/ButtonImgLimit';
import Header from 'components/Header/Header';
import Pagination from 'components/Pagination/Pagination';

function App() {
  const [query, setQuery] = useState([]);
  const [page, setPage] = useState(1);
  const [limitImagesList, setLimitImagesList] = useState(20);
  const [favouriteImg, setFavouriteImg] = useState([]);
  const [status, setStatus] = useState('Home');
  const [statusButtonImgLimit, setStatusButtonImgLimit] = useState(20);

  useEffect(() => {
    picsumApi(page, limitImagesList).then(query => setQuery(query));
  }, [page, limitImagesList]);

  const newLimitImg = limit => {
    setLimitImagesList(limit);
    setStatusButtonImgLimit(limit);
  };

  const add = (id, addImg, alt) => {
    const checker = favouriteImg.some(el => el.id === id);
    if (checker === true) return;
    const updateFavourite = { id: id, img: addImg, author: alt };
    setFavouriteImg([...favouriteImg, updateFavourite]);
  };

  const remove = (id, addImg, alt) => {
    setFavouriteImg(favouriteImg.filter(el => el.id !== id));
  };

  const statusChange = change => {
    setStatus(change);
  };

  const nexPage = page => {
    if (page === 25) return;
    setPage(page + 1);
  };
  const prewPage = page => {
    if (page === 1) return;
    setPage(page - 1);
  };

  return (
    <div className="App">
      <Header statusChange={statusChange} />
      {status === 'Home' && (
        <>
          <ImageGallery query={query} add={add} btnName={'add'} />
          {statusButtonImgLimit === 40 && (
            <ButtonImgLimit onClick={newLimitImg} limit={20} />
          )}
          {statusButtonImgLimit === 20 && (
            <ButtonImgLimit onClick={newLimitImg} limit={40} />
          )}


          <Pagination page={page} nexPage={nexPage} prewPage={prewPage} />
        </>
      )}
      {status === 'Favourite' && (
        <ImageGallery query={favouriteImg} add={remove} btnName={'remove'} />
      )}

    </div>
  );
}

export default App;
