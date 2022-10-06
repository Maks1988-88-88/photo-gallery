// import PropTypes from 'prop-types';
import s from 'components/ImageGalleryItem/ImageGalleryItem.module.css';

export default function ImageGalleryItem({
  webformatURL,
  tags,

}) {
  return (
    <li className={s.ImageGalleryItem}>
      <img
        src={`https://picsum.photos/id/${webformatURL}/300/300`}
        alt={tags}
        className={s.ImageGalleryItemImage}
      />
    </li>
  );
}

// ImageGalleryItem.propTypes = {
//   webformatURL: PropTypes.string.isRequired,
//   tags: PropTypes.string.isRequired,
// };
