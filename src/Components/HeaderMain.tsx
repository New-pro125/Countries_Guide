import { Search } from "lucide-react";
import { ChangeEvent, FC } from "react";
interface Iprops {
	setCountry: (arg: string) => void;
	country: string;
	isDarkMode:boolean;
	setSelectedTag:(arg:string)=>void;
}
const HeaderMain: FC<Iprops> = ({ country, setCountry,isDarkMode,setSelectedTag }) => {
	const regionOptions = ["Filter by Region","Africa","Americas","Asia","Europe","Oceania"];
	//* render 
	const options = regionOptions.map((item,idx) =><option key={idx} value={`${item==="Filter by Region"?"": item}`}>{item}</option>)
	return (
		<section className={`flex flex-col md:flex-row justify-between items-center mx-4 my-8 md:mx-8 md:my-12 lg:mx-12 lg:my-16 xl:mx-24 xl:mt-12 mb-8 gap-8 `}>
			<div className={`shadow-md flex items-center gap-2 p-3 w-full md:w-[40%] rounded-lg ${isDarkMode&&"bg-slate-600"}`}>
                <Search  size={32}/>
				<input
					placeholder="Search for a Country ..."
					id="country"
					name="country"
					onChange={(e: ChangeEvent<HTMLInputElement>) =>
						setCountry(e.target.value)
					}
					value={country}
					className={`px-4 py-1 w-full focus:border-none focus:outline-none ${isDarkMode&&"bg-slate-600"}`}
				/>
			</div>
			{/* <form> */}
				<select defaultValue={""} className={`shadow-md p-4 align-middle  rounded-md border-none focus:outline-none ${isDarkMode?"bg-slate-600":"bg-white"}`} onChange={(event:ChangeEvent<HTMLSelectElement>)=>setSelectedTag(event.target.value)}>
					{options}
				</select>
			{/* </form> */}
		</section>
	);
};
export default HeaderMain;
