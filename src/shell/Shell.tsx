import { CircularProgress } from "@mui/material";
import { useEffect } from "react";
import AddSection from "../components/AddSection";
import TableComponent from "../components/TableComponent";
import Styles from "./Shell.module.css";

const Shell = ({ isLoading, fetchBreweries }: Props) => {
  useEffect(() => {
    fetchBreweries();
  }, []);

  return (
    <div className={Styles.page}>
      {isLoading ? (
        <div className={Styles.spinner}>
          <CircularProgress />
        </div>
      ) : (
        <div>
          <div className={Styles.formSection}>
            <AddSection />
          </div>
          <TableComponent />
        </div>
      )}
    </div>
  );
};

export default Shell;

// ----- TYPES -----

interface Props {
  isLoading: boolean;
  fetchBreweries: () => void;
}
