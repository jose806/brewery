import { connect } from "react-redux";
import { RootState } from "../../store/store";
import AddSection from "./AddSection";
import { addBrewery } from "../../store/brewerySlice";
const mapState = (state: RootState) => {
  return {};
};

export default connect(mapState, { addBrewery })(AddSection);
