import  Moon  from '../svg/Moon';
import {FC} from 'react';
interface Iprops {
    setDarkMode:(arg:boolean)=>void;
    isDarkMode:boolean;
}
const NavBar:FC<Iprops> = ({isDarkMode,setDarkMode})=>{
return (
    <nav className={`flex justify-between items-center px-2 md:px-4 lg:px-8 xl:px-12 2xl:px-16 py-8  border-b shadow-sm ${isDarkMode ? " border-none shadow-slate-700 bg-slate-600":"shadow-gray-300"} `} >
        <h1 className="font-bold text-lg md:text-2xl lg:text-3xl">Where in the world ?</h1>
        <button className="flex gap-1 items-center px-2 py-1" onClick ={()=>setDarkMode(!isDarkMode)}>
            <Moon fillColor={isDarkMode ? "white":"black"}/>
            <h3 className="text-lg font-semibold">DarkMode</h3>
        </button>
    </nav>
)
}
export default NavBar;