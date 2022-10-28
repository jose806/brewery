import { connect } from "react-redux";
import { RootState } from "../store/store";
import { fetchBreweries } from "../store/brewerySlice";
import Shell from "./Shell";

const mapState = (state: RootState) => {
  return {
    isLoading: state.brewerySlice.isLoading,
  };
};

export default connect(mapState, { fetchBreweries })(Shell);
