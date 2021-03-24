import Login from "../pages/Login";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import libriAdmin from "../pages/libriAdmin";
import AboutAdmin from "../pages/AboutAdmin";
import AllBooks from "../pages/AllBooks";
import BookDetails from "../pages/BookDetails";
import ContactAdmin from "../pages/ContactAdmin";

export const routes=[
    {path:"/",component:Home},
    {path:"/Login",component:Login},
    {path:"/About",component:About},
    {path:"/Contact",component:Contact},
    {path:"*",component:NotFound},
    {path:"/libriAdmin",component:libriAdmin},
    {path:"/AboutAdmin",component:AboutAdmin},
    {path:"/AllBooks",component:AllBooks},
    {path:"/BookDetails/:titulli",component:BookDetails},
    {path:"/ContactTable",component:ContactAdmin}
]