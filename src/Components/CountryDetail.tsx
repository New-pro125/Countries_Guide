import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import { Countries } from "../data";
import { findItemByKey, numbersAmericanCase } from "../libs/functions";

interface Iprops {
  isDarkMode:boolean;
}

const CountryDetail: FC<Iprops> = ({isDarkMode}) => {
  const code = useLocation().pathname.slice(-3);
  const country = findItemByKey(Countries, "alpha3Code", code);

  return (
    <section className={`grid md:grid-cols-2  md:gap-8 lg:gap-12 xl:gap-16 lg:mx-9 xl:mx-12 mt-20 px-6 pb-16 ${isDarkMode? "bg-slate-700 text-white ":"bg-white"}`}>
      <div className="xl:h-[450px] 2xl:h-[500px]">
        <img
          src={country?.flag}
          alt={country?.name}
          className="block shadow-md rounded-md "
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
      <div className="w-full flex flex-col py-8 2xl:py-16 ">
        <h2 className="font-bold text-4xl mb-4">{country?.name}</h2>
        <div className="w-full flex flex-col md:flex-row items-start justify-between">
          <article className=" pb-6 leading-7 w-full">
            <h3 className="text-md mb-2">
              <span className="font-semibold">Native Name:</span> {country?.nativeName}
            </h3>
            <h3 className="text-md mb-2">
              <span className="font-semibold">Population:</span> {numbersAmericanCase(country?.population)}
            </h3>
            <h3 className="text-md mb-2">
              <span className="font-semibold">Region:</span> {country?.region}
            </h3>
            <h3 className="text-md mb-2">
              <span className="font-semibold">Sub Region:</span> {country?.subregion}
            </h3>
            <h3 className="text-md mb-2">
              <span className="font-semibold">Capital:</span> {country?.capital}
            </h3>
          </article>
          <article className=" pb-6 leading-7 w-full">
            <h3 className="text-md mb-2">
              <span className="font-semibold">Top Level Domain:</span> {country?.topLevelDomain}
            </h3>
            {country?.currencies && country.currencies.length > 0 && (
              <h3 className="text-md mb-2">
                <span className="font-semibold">Currencies:</span> {country?.currencies[0]?.name}
              </h3>
            )}
            <h3 className="text-md mb-2">
              <span className="font-semibold">Languages:</span> {country?.languages.map((item) => item.name).join(", ")}
            </h3>
          </article>
        </div>
        <article className=" pt-6">
          <h3 className="text-md">
            <div className="flex gap-2 flex-wrap py-2 items-center">
              <span className="font-semibold">Border Countries:</span>
              {country?.borders?.map((item, id) => (
                <Link
                  key={id}
                  to={`/countries/${item}`}
                  className={`shadow-sm  min-w-fit px-4 py-1  rounded ${
                    isDarkMode ? "bg-slate-600 shadow-gray-50" : "bg-gray-50"
                  }`}
                >
                  {findItemByKey(Countries, "alpha3Code", item)?.name}
                </Link>
              ))}
            </div>
          </h3>
        </article>
      </div>
    </section>
  );
};

export default CountryDetail;
