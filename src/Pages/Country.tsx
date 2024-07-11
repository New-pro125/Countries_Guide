import { useState } from "react";
import NavBar from "../Components/NavBar";
import Header from "../Components/Header";
import CountryDetail from "../Components/CountryDetail";

const Country= ()=>{
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
    return (
    <>
    <NavBar isDarkMode={isDarkMode} setDarkMode={setIsDarkMode}/>
    <Header/>
    <CountryDetail/>
    </>
)
}
export default Country;