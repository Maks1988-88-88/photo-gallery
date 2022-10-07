import PropTypes from 'prop-types';
import s from 'components/ImageGalleryItem/ImageGalleryItem.module.css';

export default function ImageGalleryItem({ webformatURL, tags, add, id, btnName }) {
  return (
    <li className={s.ImageGalleryItem}>
      <img
        src={`https://picsum.photos/id/${webformatURL}/300/300`}
        alt={tags}
        className={s.ImageGalleryItemImage}
      />
      <button
        className={s.btnGalleryImg}
        onClick={() =>
          add(id, `https://picsum.photos/id/${webformatURL}/300/300`, tags)
        }
      >
        {btnName}
      </button>
    </li>
  );
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
