import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-blue-600 font-bold text-xl">
              LinkedIn
            </Link>
            <div className="hidden md:flex space-x-6">
              <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
              <Link to="/network" className="text-gray-700 hover:text-blue-600">Network</Link>
              <Link to="/notification" className="text-gray-700 hover:text-blue-600">Notifications</Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/login" className="text-blue-600 hover:text-blue-700">Login</Link>
            <Link to="/signup" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav
