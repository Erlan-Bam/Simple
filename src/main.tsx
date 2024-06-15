import React from 'react'
import { createRoot } from 'react-dom/client'
import App from "./app/App";

const element = document.querySelector('#root') as HTMLElement
const root = createRoot(element)

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)