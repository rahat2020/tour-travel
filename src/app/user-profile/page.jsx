import UserProfile from '@/components/UserProfile/UserProfile'
import { useRouter } from 'next/navigation';
import React from 'react'

export const metadata = {
  title: 'Tour Travel | User Profile',
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