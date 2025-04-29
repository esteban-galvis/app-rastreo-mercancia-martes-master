import Home from '../Home'
import Login from '../pages/Login'
import RutaProtegida from '../components/RutaProtegida'
export let enrutador = [
    {
        path: '/home',
        element: <RutaProtegida componente={<Home />} />,
    },
    {
        path: '/',
        element: <Login/>,
    },
];