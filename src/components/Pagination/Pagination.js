import PropTypes from 'prop-types';

import s from 'components/Pagination/Pagination.module.css';

function Pagination({ page, nexPage, prewPage }) {
  return (
    <div className={s.pagination}>
      <a onClick={() => prewPage(page)} className={s.paginationArrow}>
        «
      </a>
      <a className={s.active}>{page}</a>
      <a onClick={() => nexPage(page)} className={s.paginationArrow}>
        »
      </a>
    </div>
  );
}

Pagination.propTypes = {
  nexPage: PropTypes.func.isRequired,
  prewPage: PropTypes.func.isRequired,
  page: PropTypes.number,
};

export default Pagination;
