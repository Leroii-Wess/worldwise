/* eslint-disable react/prop-types */
import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import CityItem from "./CityItem";
import Message from "./Message";
import CountryItem from './CountryItem'
import { useCities } from "../contexts/CitiesContext";

function CountryList() {
  const { cities, isLoading } = useCities();

  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

    const countries = cities.reduce((arr, city) => {
      if (!arr.map(el => el.country).includes(city.country)) {
        // console.log([...arr, {country: city.country, emoji: city.emoji}])
        return [...arr, {country: city.country, emoji: city.emoji}]
      } else {
        // console.log(arr);
        return arr
      }
    }, [])

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
}

export default CountryList;
