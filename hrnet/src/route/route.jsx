
import Layout from '../component/layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CurrentEmployee from '../page/CurrentEmployee'

// Generate path for route function

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <CurrentEmployee />,

            }
        ],
    },
])



/**
* Create route for render the appropriate UI
* @return { ReactElement }
*/

function Route() {
    return <RouterProvider router={router} />
}

export default Route