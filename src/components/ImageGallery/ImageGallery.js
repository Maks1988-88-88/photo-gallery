import PropTypes from 'prop-types';
import s from 'components/ImageGallery/ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

function ImageGallery({ query, add, btnName, toggleModal, bigImg }) {
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
          toggleModal={() => toggleModal()}
          bigImg={() =>
            bigImg(el.id, `https://picsum.photos/id/${el.id}/1200/1200`, el.tags)
          }
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
  add: PropTypes.func.isRequired,
  btnName: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
  bigImg: PropTypes.func.isRequired,
};

export default ImageGallery;
