import { useState } from 'react'
import { RouterProvider } from 'react-router'
import { router } from './app.routes'
import "./index.css"
import { HomepageProvider } from './contexts/homepage.context'
import { AdminAuthProvider } from './contexts/adminAuth.context'
import { AdminCustomProvider } from './contexts/adminCustom.context'

function App() {

  return (
    <AdminAuthProvider>
      <AdminCustomProvider>
        <HomepageProvider>
          <RouterProvider router={router}/>
        </HomepageProvider>
      </AdminCustomProvider>
    </AdminAuthProvider>
  )
}

export default App