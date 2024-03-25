import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SpanishHome from '../components/SpanishHome';
import EnglishHome from '../components/EnglishHome';
import GeneralHome from '../components/GeneralHome';


function Home() {
  const [component, setComponent] = useState(null);
  const[countryCode, setCountryCode] = useState("xx");
useEffect(() => {
  const fetchIP = async () => {
    try {
      const response = await axios.get("https://api.ipify.org?format=json");
      const ip = response.data.ip;
      const responseCC = await axios.get(
        `https://ipapi.co/${ip}/country_code`
      );
      setCountryCode(responseCC.data);
    
    } catch (error) {
      console.error("Error fetching IP: ", error);
    }    
  };

  fetchIP();
}, []);

useEffect(() => {
  //Lógica renderizado basada en CountryCode
  switch (countryCode) {
    case "MX":
      setComponent(<SpanishHome />);
      break;
    case "US":
      setComponent(<EnglishHome />);
      break;
    default:
      setComponent(<GeneralHome />);
  }
}, [countryCode]);

return <>{component}</>;

}

export default Home;
