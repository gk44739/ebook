import Login from "../pages/Login";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound"


export const routes=[
    {path:"/",component:Login},
    {path:"/Home",component:Home},
    {path:"/About",component:About},
    {path:"/Contact",component:Contact},
    {path:"*",component:NotFound}
]