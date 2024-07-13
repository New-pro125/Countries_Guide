import { FC } from 'react';
import { numbersAmericanCase } from '../libs/functions';

interface Iprops {
    flag: string;
    name: string;
    population: number;
    Region: string;
    Capital: string | undefined;
    className: string | undefined;
}

const CountryCard: FC<Iprops> = ({ flag, name, population, Region, Capital, className }) => {
    return (
        <div  className={`border rounded-lg overflow-hidden shadow-md ${className} hover:scale-105 hover:duration-200 cursor-pointer`}>
            <section style={{ height: "12rem", width: "100%" }}>
                <img src={flag} alt={name} 
                     style={{
                         width: "100%",
                         height: "100%",
                         objectFit: "cover",
                         display: "block"
                     }}  />
            </section>
            <section className="px-4 py-6">
                <h2 className="font-bold text-xl mb-4">{name}</h2>
                <h3><span className="font-semibold">Population: </span>{numbersAmericanCase(population)}</h3>
                <h3><span className="font-semibold">Region: </span>{Region}</h3>
                <h3><span className="font-semibold">Capital: </span>{Capital}</h3>
            </section>
        </div>
    );
}

export default CountryCard;
