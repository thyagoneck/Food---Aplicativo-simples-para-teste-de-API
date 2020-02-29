import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer w74oHtxmijtOurUEJkgEyeJXJiGa8McSX50YHcidSY2j9iYYlhtwD_UkQLfMckzdLctPNytBW7PZykgTaWV63yVr5wWd1Wqqezb1UBLquuvJs7icEtl38QY3VMFWXnYx"
  }
});
