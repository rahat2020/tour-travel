import SingleEvents from '@/components/SingleEvents/SingleEvents'
import React from 'react'

export const metadata = {
    title: 'Tour Travel | Single event',
    description: 'A tour travel website',
  }

const SingleEventsPage = ({params}) => {
    return (
        <div>
            <SingleEvents params={params.id}/>
        </div>
    )
}

export default SingleEventsPage