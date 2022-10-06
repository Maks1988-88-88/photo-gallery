// import PropTypes from 'prop-types';
import s from 'components/ImageGallery/ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

function ImageGallery({ query }) {
    console.log(query);
  return (
    <ul className={s.ImageGallery}>
      {query.map(el => (
        <ImageGalleryItem
          key={el.id}
          webformatURL={el.id}
          tags={el.author}
        />
      ))}
    </ul>
  );
}

// ImageGallery.propTypes = {
//   query: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number,
//       tags: PropTypes.string,
//       webformatURL: PropTypes.string,
//     }),
//   ),
// };

export default ImageGallery;
