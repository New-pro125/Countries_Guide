import NavBar from "../Components/NavBar";
import Header from "../Components/Header";
import CountryDetail from "../Components/CountryDetail";
interface Iprops {
	isDarkMode: boolean;
	setIsDarkMode: (arg: boolean) => void;
}
const Country = ({ isDarkMode, setIsDarkMode }: Iprops) => {
	return (
		<div
			className={`${
				isDarkMode ? "bg-slate-700 text-white" : "bg-white"
			}min-h-screen`}>
			<NavBar isDarkMode={isDarkMode} setDarkMode={setIsDarkMode} />
			<Header isDarkMode={isDarkMode}  />
			<CountryDetail isDarkMode={isDarkMode}  />
		</div>
	);
};
export default Country;
