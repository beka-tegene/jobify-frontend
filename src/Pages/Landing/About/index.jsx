import React from 'react'
import { Navigate } from '../Navigate'
import { Footer } from '../Footer'
import { Information } from './Information'

export const About = () => {
  return (
    <div>
        <Navigate />
        <Information />
        <Footer />
    </div>
  )
}
