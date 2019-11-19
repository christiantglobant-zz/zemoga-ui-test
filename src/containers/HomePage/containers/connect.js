import { connect } from "react-redux";

import { mapStateToProps, mapDispatchToProps } from "./props";

const bindComponent = Component =>
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Component);

export { bindComponent };
