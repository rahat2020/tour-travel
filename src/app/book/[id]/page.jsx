import Booking from '@/components/Booking/Booking'
import React from 'react'

const page = ({params}) => {
  return (
    <div>
        <Booking  params={params.id}/>
    </div>
  )
}

export default page