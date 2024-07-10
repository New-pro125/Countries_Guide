import {createBrowserRouter, createRoutesFromElements,Route} from 'react-router-dom';
import Home from '../Pages/Home';
const router = createBrowserRouter(
    createRoutesFromElements(
        <>
        <Route path='/' element={<Home/>}>
        </Route>
        </>
    )
)
export default router;