import {createBrowserRouter} from 'react-router-dom';
import MainLoyaut from '../../loyauts/MainLoyauts/MainLoyaut';
import AuthLoyaut from '../../loyauts/AuthLoyauts/AuthLoyaut';
import GamesLoyaut from '../../loyauts/GamesLoyauts/GamesLoyaut';
import MainPage from '../../pages';
import LoginPage from '../../pages/auth/login';
import RegisterPage from '../../pages/auth/register';
import RoulettePage from '../../pages/games/roulette';
import SlotsPage from '../../pages/games/slotes';
import HummerPage from '../../pages/games/hummer';

export const router = createBrowserRouter([
    {
        path: '/',
        Component:  MainLoyaut ,
        children: [
            {
                index: true,
                element: <MainPage/>,  
            }
        ]
    },
    {
        path: 'auth',
        Component:  AuthLoyaut ,
        children: [
            {
                path: 'login',
                element: <LoginPage/>
            },
            {
                path: 'register',
                element: <RegisterPage/>
            },
        ]
    },
    {
        path: 'games',
        Component:  GamesLoyaut ,
        children: [
            {
                path: 'roulette',
                element: <RoulettePage/>
            },
            {
                path: 'slots',
                element:<SlotsPage/>
            },
            {
                path: 'hummers',
                element:<HummerPage/>
            },
        ]
    },

])