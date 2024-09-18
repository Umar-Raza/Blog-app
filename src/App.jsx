import { Button } from '@material-tailwind/react'
import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import { Home } from './pages/home/Home'
import { AllBlogs } from './pages/allBlogs/AllBlogs'
import { BlogInfo } from './pages/blogInfo/BlogInfo'
import { AdminLogin } from './pages/admin/adminLogin/AdminLogin'
import { Dashboard } from './pages/admin/dashboard/Dashboard'
import { NoPage } from './pages/noPage/NoPage'
import { Blog } from './pages/blog/Blog'
import MyState from './context/data/myState'
import { Toaster } from 'react-hot-toast'
import CreateBlog from './pages/admin/createBlog/CreateBlog'


export default function App() {
  return (

    <MyState>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/allBlogs' element={<AllBlogs />} />
          <Route path='/blogInfo/:id' element={<BlogInfo />} />
          <Route path='/adminLogin' element={<AdminLogin />} />
          <Route path='/dashboard' element={
            <ProtectedRouteForAdmin>
              <Dashboard />
            </ProtectedRouteForAdmin>
          } />
          <Route path='/createBlog' element={
            <ProtectedRouteForAdmin>
              <CreateBlog />
            </ProtectedRouteForAdmin>
          } />
          <Route path='/*' element={<NoPage />} />
        </Routes>
        <Toaster />
      </Router>
    </MyState>
  )
}


export const ProtectedRouteForAdmin = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem('admin'))
  if (admin?.user?.email === "test@gmail.com") {
    return children
  }
  else {
    return <Navigate to={'/adminlogin'} />
  }
}