import { connect } from "react-redux";
import { setVisibilityFilter } from "actions/todo";
import Link from "components/Link/Link";

const mapStateToProps = (state, ownProps) => {
  // console.log("mapStateToProps", { state, ownProps });
  return {
    active: ownProps.filter === state.setVisibilityFilter
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log("mapDispatchToProps", { dispatch, ownProps });
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter));
    }
  };
};

const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link);

export default FilterLink;
