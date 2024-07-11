import {createBrowserRouter, createRoutesFromElements,Route} from 'react-router-dom';
import Home from '../Pages/Home';
import Country from '../Pages/Country';
const router = createBrowserRouter(
    createRoutesFromElements(
        <>
        <Route path='/' element={<Home/>}>
        </Route>
        <Route path ='/countries/:id' element={<Country/>}/>
        </>
    )
)
export default router;