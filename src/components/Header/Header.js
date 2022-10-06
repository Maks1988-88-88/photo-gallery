// import PropTypes from 'prop-types';

import s from 'components/Header/Header.module.css';

function Header({ statusChange }) {
  return (
    <nav className={s.headerNav}>
      <button className={s.headerName} onClick={() => statusChange('Home')}>
        Home
      </button>
      <button
        className={s.headerName}
        onClick={() => statusChange('Favourite')}
      >
        Favourite
      </button>
    </nav>
  );
}

// Header.propTypes = {
//   onClick: PropTypes.func.isRequired,
//   limit: PropTypes.number,
// };

export default Header;
