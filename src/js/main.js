import "../css/main.css";
import request from "./request";
import createCountries from "./updateUi";
import "./mode";
import "./filter";
const API = "https://restcountries.com/v3.1/all";

request(API)
  .then((data) => {
    createCountries(data);
  })
  .catch((err) => {
    console.log(err);
  });
