import './App.css';
import React, { useState, useEffect } from 'react';

import picsumApi from 'Api/picsumApi';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import ButtonImgLimit from 'components/ButtonImgLimit/ButtonImgLimit';
import Header from 'components/Header/Header';

function App() {
  const [query, setQuery] = useState([]);
  const [page, setPage] = useState(1);
  const [limitImagesList, setLimitImagesList] = useState(20);
  const [favouriteImg, setFavouriteImg] = useState([]);
  const [status, setStatus] = useState('Home');
  const [statusButtonImgLimit, setStatusButtonImgLimit] = useState(20);

  useEffect(() => {
    picsumApi(page, limitImagesList).then(query => setQuery(query));
    // console.log('++');
  }, [page, limitImagesList]);

  const newLimitImg = limit => {
    setLimitImagesList(limit);
    setStatusButtonImgLimit(limit);
  };

  const add = (id, addImg, alt) => {
    const checker = favouriteImg.some(el => el.id === id);
    if (checker === true) return;
    console.log('checker:', checker);
    const updateFavourite = { id: id, img: addImg, author: alt };
    setFavouriteImg([...favouriteImg, updateFavourite]);
    console.log('favouriteImg:', favouriteImg);
  };

  const remove = (id, addImg, alt) => {
    setFavouriteImg(favouriteImg.filter(el => el.id !== id));
  };

  const statusChange = change => {
    setStatus(change);
    console.log(change);
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

          {/* <ButtonImgLimit onClick={newLimitImg} limit={20} />
          <ButtonImgLimit onClick={newLimitImg} limit={40} /> */}
        </>
      )}
      {status === 'Favourite' && (
        <ImageGallery query={favouriteImg} add={remove} btnName={'remove'} />
      )}

      {/* <ImageGallery query={query} add={add} /> */}
      {/* <ButtonImgLimit onClick={newLimitImg} limit={20} />
      <ButtonImgLimit onClick={newLimitImg} limit={40} /> */}
    </div>
  );
}

export default App;
