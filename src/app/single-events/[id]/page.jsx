import SingleEvents from '@/components/SingleEvents/SingleEvents'
import React from 'react'

export const metadata = {
    title: 'Tour Travel | Single event',
    description: 'A tour travel website',
  }

const page = ({params}) => {
    return (
        <div>
            <SingleEvents params={params.id}/>
        </div>
    )
}

export default page