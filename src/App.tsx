import { RouterProvider } from "react-router-dom";
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from "react-router-dom";
import { useState } from "react";
import Home from "./Pages/Home";
import Country from "./Pages/Country";
const App = () => {
	const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
	return (
		<>
			<RouterProvider
				router={createBrowserRouter(
					createRoutesFromElements(
						<>
							<Route path="/" element={<Home isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />}></Route>
							<Route path="/countries/:id" element={<Country isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />} />
						</>
					)
				)}
			/>
		</>
	);
};
export default App;
