import UserProfile from '@/components/UserProfile/UserProfile'
import React from 'react'

export const metadata = {
  title: 'Tour Travel | User',
  description: 'A tour travel website',
}

const page = () => {
  return (
    <div>
        <UserProfile/>
    </div>
  )
}

export default page