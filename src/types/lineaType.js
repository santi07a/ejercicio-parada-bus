
import PropTypes from "prop-types";

export const lineaType = {
  routeId: PropTypes.string.isRequired,
  line: PropTypes.string.isRequired,
  "text-ca": PropTypes.string.isRequired,
  "t-in-s": PropTypes.number.isRequired,
  destination: PropTypes.string.isRequired,
  "t-in-min": PropTypes.number.isRequired
};
