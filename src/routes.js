import { LoginLayout, DefaultLayout } from './layouts';
import Login from './routes/Login'
import Checkin from './routes/Checkin'

const routes = [
    {
        path: "/login",
        layout: LoginLayout,
        component: Login,
    },
    {
        path: "/",
        layout: DefaultLayout,
        component: Checkin,
    }
];

export default routes;