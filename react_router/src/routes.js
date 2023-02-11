import Home from "./pages/Home";
import Contact from "./pages/Contact";
import BlogLayout from "./pages/blog";
import Blog from "./pages/blog/Blog";
import Categories from "./pages/blog/Categories";
import Post from "./pages/blog/Post";
import NotFound from "./pages/NotFound";
import BlogNotFound from "./pages/blog/BlogNotFound";
import Profile from "./pages/Profile";
import PrivateRoute from "./components/PrivateRoute";
import AuthLayout from "./pages/auth/AuthLayout";
import HomeLayout from "./pages/HomeLayout";
import Login from "./pages/auth/Login";

const routes = [
    {
        path: "/",
        name: "home",
        element: <HomeLayout />,
        children: [
            {
                name: "index",
                index: true,
                element: <Home />
            },
            {
                name: "contact",
                path: "/contact",
                element: <Contact />
            },
            {
                name: "blog",
                path: "/blog",
                element: <BlogLayout />,
                children: [
                    {
                        name: "index",
                        index: true,
                        element: <Blog />
                    },
                    {
                        name: "categories",
                        path: "categories",
                        element: <Categories />
                    },
                    {
                        name: "post",
                        path: "post/:url/:test",
                        element: <Post />
                    },
                    {
                        name: "notfound",
                        path: "*",
                        element: <BlogNotFound />
                    }
                ]
            },
            {
                name: "profile",
                path: "/profile",
                element: <PrivateRoute><Profile /></PrivateRoute>
            }
        ]
    },
    {
        name: "auth",
        path: "/auth",
        element: <AuthLayout />,
        children: [
            {
                path: "login",
                element: <Login />
            }
        ]
    },
    {
        name: "notfound",
        path: "*",
        element: <NotFound />
    }
]

export default routes;