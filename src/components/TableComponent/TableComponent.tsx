import {
  Button,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import types from "../../types";
import { headers } from "./Utility/tableUtility";
import ClearIcon from "@mui/icons-material/Clear";

const TableComponent = ({
  breweries,
  removeSingleBrewery,
  editBrewery,
  onChangeOfName,
  onChangeOfCountry,
  onChangeOfType,
}: Props) => {
  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {headers.map((single, key) => (
                <TableCell key={key}>{single}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {breweries.map((brewery, key) => {
              return (
                <TableRow key={key}>
                  <TableCell>
                    <IconButton onClick={() => removeSingleBrewery(brewery.id)}>
                      <ClearIcon />
                    </IconButton>
                    {brewery.edit ? (
                      <TextField
                        value={brewery.name}
                        onChange={(e) =>
                          onChangeOfName({
                            id: brewery.id,
                            value: e.target.value,
                          })
                        }
                      />
                    ) : (
                      brewery.name
                    )}
                  </TableCell>
                  <TableCell>
                    {brewery.edit ? (
                      <TextField
                        value={brewery.brewery_type}
                        onChange={(e) =>
                          onChangeOfType({
                            id: brewery.id,
                            value: e.target.value,
                          })
                        }
                      />
                    ) : (
                      brewery.brewery_type
                    )}
                  </TableCell>
                  <TableCell>
                    {brewery.edit ? (
                      <TextField
                        value={brewery.country}
                        onChange={(e) =>
                          onChangeOfCountry({
                            id: brewery.id,
                            value: e.target.value,
                          })
                        }
                      />
                    ) : (
                      brewery.country
                    )}
                  </TableCell>
                  <TableCell>
                    {!brewery.edit ? (
                      <Button
                        onClick={() => {
                          editBrewery({ id: brewery.id, edit: true });
                        }}
                      >
                        Edit
                      </Button>
                    ) : (
                      <Button
                        variant="contained"
                        onClick={() => {
                          editBrewery({ id: brewery.id, edit: false });
                        }}
                      >
                        Apply
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableComponent;

// ------ TYPES ------

interface Props {
  breweries: types.Brewery[];
  removeSingleBrewery: (id: string) => void;
  editBrewery: ({ id, edit }: { id: string; edit: boolean }) => void;
  onChangeOfName: ({ id, value }: OnChange) => void;
  onChangeOfCountry: ({ id, value }: OnChange) => void;
  onChangeOfType: ({ id, value }: OnChange) => void;
}

interface OnChange {
  id: string;
  value: string;
}
