import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import store from './store/store.js'
import { Provider } from 'react-redux'
import {RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/pages/Home.jsx'
import {Protected,Login} from './components/compIndex.js'
import Signup from './components/pages/SignUp.jsx'
import AllPosts from './components/pages/AllPosts.jsx'
import AddPost from './components/pages/AddPost.jsx'
import EditPost from './components/pages/EditPost.jsx'
import Post from './components/pages/Post.jsx'


const router = createBrowserRouter([
   {
        path: '/',
        element: <App />,
        children:[
            {
                path:'/',
                element: <Home />
            },
            {
                path:'/login',
                element:(
                    <Protected authentication={false}>
                        <Login/>

                    </Protected>
                )
            },
            {
                path: "/signup",
                element: (
                    <Protected authentication={false}>
                        <Signup />
                    </Protected>
                ),
            },
            {
                path: "/all-posts",
                element: (
                    <Protected authentication>
                        {" "}
                        <AllPosts />
                    </Protected>
                ),
            },
            {
                path: "/add-post",
                element: (
                    <Protected authentication>
                        {" "}
                        <AddPost />
                    </Protected>
                ),
            },
            {
                path: "/edit-post/:slug",
                element: (
                    <Protected authentication>
                        {" "}
                        <EditPost />
                    </Protected>
                ),
            },
            {
                path: "/post/:slug",
                element: <Post />,
            },
        ]
    }
])

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
  
)
