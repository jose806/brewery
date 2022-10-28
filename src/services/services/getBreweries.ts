import { axiosInstance } from "../axiosClient/axiosClient";
const promise = () =>
  axiosInstance({
    url: "https://api.openbrewerydb.org/breweries",
  })
    .then(({ data }) => {
      return formatData(data);
    })
    .catch((error) => {
      console.log(error);
      return error;
    });

export default promise;

// ---- UTILITY ----------

const formatData = (data: Data[]) => {
  return data.map((single) => {
    return { ...single, edit: false };
  });
};

// ----- TYPES --------------

interface Data {
  address_2: string | null;
  address_3: string | null;
  brewery_type: string | null;
  city: string | null;
  country: string | null;
  county_province: string | null;
  created_at: string | null;
  id: string;
  latitude: string | null;
  longitude: string | null;
  name: string | null;
  phone: string | null;
  postal_code: string | null;
  state: string | null;
  street: string | null;
  updated_at: string | null;
  website_url: string | null;
}
