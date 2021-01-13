/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import PropTypes from "prop-types";

const Item = ({ children, flex }) => {
  return (
    <div
      className={flex - item}
      css={css`
        flex: ${flex};
      `}
    >
      {children}
    </div>
  );
};

Item.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  flex: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default Item;
