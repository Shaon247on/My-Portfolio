import {createBrowserRouter} from "react-router-dom";
import LayOut from "../LayOut/LayOut";
import Home from "../Components/Home/Home/Home";
import Banner from "../Components/Home/Banner/Banner";
import Work from "../Components/Home/Work/Work";
import Skills from "../Components/Home/Skills/Skills";
import Experience from "../Components/Home/Experience/Experience";
import Contact from "../Components/Home/Contact/Contact";
import Blogs from "../Components/Home/Blogs/Blogs";
import WorkDetails from "../Components/Home/Work/WorkDetails";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LayOut></LayOut>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: "/banner",
            element:<Banner></Banner>
        },
        {
            path: "/work",
            element:<Work></Work>
        },
        {
            path: "/skills",
            element:<Skills></Skills>
        },
        {
            path: "/experience",
            element:<Experience></Experience>
        },
        {
            path: "/contact",
            element:<Contact></Contact>
        },
        {
            path: "/blogs",
            element:<Blogs></Blogs>
        },
        {
            path: "/work/:id",
            element:<WorkDetails></WorkDetails>,
            loader: ()=> fetch('/data.json')
        },
      ]
    },
  ]);

  export default router