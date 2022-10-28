import { connect } from "react-redux";
import { RootState } from "../../store/store";
import TableComponent from "./TableComponent";
import {
  removeSingleBrewery,
  editBrewery,
  onChangeOfName,
  onChangeOfCountry,
  onChangeOfType,
} from "../../store/brewerySlice";

const mapState = (state: RootState) => {
  return {
    breweries: state.brewerySlice.breweries,
  };
};

export default connect(mapState, {
  removeSingleBrewery,
  editBrewery,
  onChangeOfName,
  onChangeOfCountry,
  onChangeOfType,
})(TableComponent);
