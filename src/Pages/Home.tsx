import NavBar from "../Components/NavBar";
import { useState } from "react";
import { Countries } from "../data";
import CountryCard from "../Components/CountryCard";
import HeaderMain from "../Components/HeaderMain";
import NotFound from "../Components/NotFound";
import { Link } from "react-router-dom";
const Home = () => {
	const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
	const [country, setCountry] = useState<string>("");
	const [selectedTag, setSelectedTag] = useState<string>("");
	//* render
	const countriesByName = Countries.filter(
		(item) =>
			item.name.toLowerCase().includes(country.toLowerCase()) === true ||
			country === ""
	);
	const countriesBytag = countriesByName.filter(
		(item) => item?.region.includes(selectedTag) === true || selectedTag === ""
	);
	const Cards = countriesBytag.map(
		(item, idx) =>
			item && (
				<Link key={idx} to={`/countries/${item.alpha3Code}`}>
					<CountryCard
						name={item.name}
						population={item.population}
						flag={item.flag}
						Capital={item.capital}
						Region={item.region}
						className={`${
							isDarkMode && "bg-slate-600 shadow-slate-700 border-none"
						}`}
					/>{" "}
				</Link>
			)
	);
	return (
		<div
			className={`${
				isDarkMode ? "bg-slate-700 text-white" : "bg-white"
			} min-h-screen`}>
			<NavBar setDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
			<HeaderMain
				country={country}
				setCountry={setCountry}
				isDarkMode={isDarkMode}
				setSelectedTag={setSelectedTag}
			/>
			<main className={`${isDarkMode && "bg-slate-700"} py-8 relative  `}>
				<section
					className={`${Cards.length===0? "block":"grid"} grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 px-4 py-2 md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-xl mx-auto `}>
					{Cards.length>0 ? Cards : <NotFound isDarkMode={isDarkMode} />}
				</section>
			</main>
		</div>
	);
};
export default Home;
