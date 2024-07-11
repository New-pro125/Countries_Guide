import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import { Countries } from "../data";
import { findItemByKey, numbersAmericanCase } from "../libs/functions";
interface Iprops {}
const CountryDetail: FC<Iprops> = () => {
	const { pathname } = useLocation();
	const code = pathname.slice(-3);
	const country = findItemByKey(Countries, "alpha3Code", code);
    console.log(useLocation());
	return (
		<section >
			<div className={`w-full px-6 py-4 mt-8`}>
				<img
					src={country?.flag}
					alt={country?.name}
					className={`block my-4 shadow-md`}
				/>
			</div>
			<article className="px-6 pb-6">
				<h2 className={`font-semibold text-3xl mb-4`}>{country?.name}</h2>
				<h3 className={`text-md`}>
					<span className="font-medium ">Native name</span> :{" "}
					{country?.nativeName}
				</h3>
				<h3 className={`text-md`}>
					<span className="font-medium ">Population</span> :{" "}
					{numbersAmericanCase(country?.population)}
				</h3>
				<h3 className={`text-md`}>
					<span className="font-medium ">Region</span> : {country?.region}
				</h3>
				<h3 className={`text-md`}>
					<span className="font-medium ">Sub Region</span> :{" "}
					{country?.subregion}
				</h3>
				<h3 className={`text-md`}>
					<span className="font-medium ">Capital</span> : {country?.capital}
				</h3>
			</article>
			<article className={`px-6 pt-6 pb-6`}>
				<h3 className={`text-md`}>
					<span className="font-medium ">Top Level Domain</span> :{" "}
					{country?.topLevelDomain}
				</h3>
			{country?.currencies&& country.currencies?.length>0  &&	<h3 className={`text-md`}>
					<span className="font-medium ">Currencies</span> :{" "}
					{country?.currencies[0]?.name}{" "}
					<span> {country?.currencies[0]?.symbol}</span>
				</h3>}
				<h3 className={`text-md`}>
					<span className="font-medium ">Languages</span> :{" "}
					{country?.languages.map((item) => item.name).join(" , ")}
				</h3>
			</article>
			<article className={`px-6 pt-6`}>
				<h3 className={`text-md`}>
					<span className="font-medium block mb-2">Border Countries :</span>{" "}
					<summary className={`flex gap-2 flex-wrap py-2 mb-2`}>
						{country?.borders?.map((item) => (
							<Link
								to={`/countries/${item}`}
								className={`shadow-md  min-w-fit px-4 py-1`}>
								{findItemByKey(Countries, "alpha3Code", item)?.name}
							</Link>
						))}
					</summary>
				</h3>
			</article>
		</section>
	);
};
export default CountryDetail;
