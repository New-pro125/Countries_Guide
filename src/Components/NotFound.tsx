interface Iprops{
    isDarkMode:boolean;
}
const NotFound = ({isDarkMode}:Iprops) => {
	return (
		<div className="flex flex-col items-center mx-auto w-full -my-12 -space-y-10 md:-space-y-16 lg:-space-y-24  xl:-space-y-32 ">
			<h1 className="font-montserrat text-[5rem] md:text-[18vw] m-0 uppercase font-thin ">
				Oops!
			</h1>
			<h2 className={`text-4xl mt-8 w-full lg:w-[40%] text-center py-8 ${isDarkMode? "bg-slate-700" : "bg-white"} `}>404 - No Country can be found</h2>
		</div>
	);
};

export default NotFound;
