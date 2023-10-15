import Booking from '@/components/Booking/Booking'
import React from 'react'

const BookEventsPage = ({params}) => {
  return (
    <div>
        <Booking  params={params.id}/>
    </div>
  )
}

export default BookEventsPage