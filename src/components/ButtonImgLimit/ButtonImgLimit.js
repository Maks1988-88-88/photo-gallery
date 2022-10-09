import PropTypes from 'prop-types';

import s from 'components/ButtonImgLimit/ButtonImgLimit.module.css';

function ButtonImgLimit({ onClick, limit }) {
  return (
    <button className={s.Button} type="button" onClick={() => onClick(limit)}>
      Change list on {limit}
    </button>
  );
}

ButtonImgLimit.propTypes = {
  onClick: PropTypes.func.isRequired,
  limit: PropTypes.number.isRequired,
};

export default ButtonImgLimit;
