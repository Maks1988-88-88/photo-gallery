import PropTypes from 'prop-types';

import s from 'components/Pagination/Pagination.module.css';

function Pagination({ page, nexPage, prewPage }) {
  return (
    <div className={s.pagination}>
      <button onClick={() => prewPage(page)} className={s.button}>
        «
      </button>
      <p className={s.active}>{page}</p>
      <button onClick={() => nexPage(page)} className={s.button}>
        »
      </button>
    </div>
  );
}

Pagination.propTypes = {
  nexPage: PropTypes.func.isRequired,
  prewPage: PropTypes.func.isRequired,
  page: PropTypes.number,
};

export default Pagination;
