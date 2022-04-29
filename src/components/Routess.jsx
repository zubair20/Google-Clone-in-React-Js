import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Results from './Results'
export const Routess = () => {
  return (
    <div className="p-4">
      <Routes>
          <Route exact path="/" element={<Navigate to="/search" />} />
          <Route exact path='/search' element={<Results />} />
          <Route exact path='/image' element={<Results />} />
          <Route exact path='/news' element={<Results />} />
          <Route exact path='/video' element={<Results />} />
      </Routes>
    </div>
  )
}
