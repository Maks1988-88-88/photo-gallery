import PropTypes from 'prop-types';
import s from 'components/ImageGallery/ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

function ImageGallery({ query, add, btnName }) {
  console.log(query);
  return (
    <ul className={s.ImageGallery}>
      {query.map(el => (
        <ImageGalleryItem
          key={el.id}
          webformatURL={el.id}
          tags={el.author}
          add={add}
          id={el.id}
          btnName={btnName}
        />
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  query: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      tags: PropTypes.string,
      webformatURL: PropTypes.string,
    }),
  ),
};

export default ImageGallery;
