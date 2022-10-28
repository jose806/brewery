import { Button, Divider, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";
import Styles from "./AddSection.module.css";
import { v1 as uuidv1 } from "uuid";
import types from "../../types";

const AddSection = ({ addBrewery }: Props) => {
  const [nameInput, setNameInput] = useState<InputState>({
    value: "",
    error: false,
  });
  const [typeInput, setTypeInput] = useState<InputState>({
    value: "",
    error: false,
  });
  const [countryInput, setCountryInput] = useState<InputState>({
    value: "",
    error: false,
  });

  const nameHandler = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const name = event.target.value;
    setNameInput({ value: name, error: false });
  };

  const typeHandler = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const type = event.target.value;
    setTypeInput({ value: type, error: false });
  };

  const countryHandler = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const country = event.target.value;
    setCountryInput({ value: country, error: false });
  };

  const addHandler = () => {
    const validation = validateInputs();
    if (validation) {
      addBrewery(
        contructBreweryPayload({
          name: nameInput.value,
          country: countryInput.value,
          type: typeInput.value,
        })
      );
      resetValues();
    }
  };

  const validateInputs = () => {
    let valid = true;
    if (!nameInput.value) {
      valid = false;
      setNameInput({ ...nameInput, error: true });
    }
    if (!typeInput.value) {
      valid = false;
      setTypeInput({ ...typeInput, error: true });
    }
    if (!countryInput.value) {
      valid = false;
      setCountryInput({ ...countryInput, error: true });
    }
    return valid;
  };

  const resetValues = () => {
    setNameInput({ value: "", error: false });
    setTypeInput({ value: "", error: false });
    setCountryInput({ value: "", error: false });
  };
  return (
    <div>
      <Paper>
        <div className={Styles.paperContainer}>
          <div className={Styles.header}>
            <Typography variant="h3">Add Breweries</Typography>
          </div>
          <Divider />

          <div className={Styles.inputSection}>
            <div className={Styles.input}>
              <TextField
                value={nameInput.value}
                label="Name"
                onChange={nameHandler}
                error={nameInput.error}
              />
            </div>
            <div className={Styles.input}>
              <TextField
                value={typeInput.value}
                label="Brewery Type"
                onChange={typeHandler}
                error={typeInput.error}
              />
            </div>
            <div className={Styles.input}>
              <TextField
                value={countryInput.value}
                label="Country of Origin"
                onChange={countryHandler}
                error={countryInput.error}
              />
            </div>
          </div>
          <div className={Styles.buttonSection}>
            <div className={Styles.buttonDiv}>
              <Button variant="contained" onClick={addHandler}>
                Add
              </Button>
            </div>
            <div className={Styles.buttonDiv}>
              <Button variant="outlined" onClick={resetValues}>
                Clear
              </Button>
            </div>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default AddSection;

// -------- TYPES ------------

interface Props {
  addBrewery: (payload: types.Brewery) => void;
}

interface InputState {
  value: string;
  error: boolean;
}

interface SimpleBrewery {
  name: string;
  type: string;
  country: string;
}
// ------- UTILITY --------------

const contructBreweryPayload = ({ name, type, country }: SimpleBrewery) => {
  const id = uuidv1();
  return {
    address_2: null,
    address_3: null,
    brewery_type: type,
    city: null,
    country: country,
    county_province: null,
    created_at: null,
    id: id,
    latitude: null,
    longitude: null,
    name: name,
    phone: null,
    postal_code: null,
    state: null,
    street: null,
    updated_at: null,
    website_url: null,
    edit: false,
  };
};
