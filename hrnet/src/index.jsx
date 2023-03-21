import React from 'react'
import Route from './route/route'
import { createRoot } from 'react-dom/client'
import store from './store'
import { Provider } from 'react-redux'

const root = createRoot(document.getElementById('root'))
root.render(
    <Provider store={store}>
        <React.StrictMode>
            <Route />
        </React.StrictMode>
    </Provider>
)