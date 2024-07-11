import { ArrowLeftIcon } from "lucide-react";
import { FC } from "react";
import { Link } from "react-router-dom";
interface Iprops {
	isDarkMode: boolean;
}
const Header: FC<Iprops> = ({ isDarkMode }) => {
	return (
		<header className={`flex justify-start mt-20 mx-6 md:mx-8 xl:mx-10 `}>
			<Link
				to="/"
				className={`shadow-sm shadow-gray-400 flex items-center rounded-md justify-center gap-2 px-8 py-2 w-fit ${
					isDarkMode ? "bg-slate-600 text-white" : "bg-gray-50"
				}`}>
				<ArrowLeftIcon size={24} />
				<h3 className="font-light text-xl">Back</h3>
			</Link>
		</header>
	);
};
export default Header;
