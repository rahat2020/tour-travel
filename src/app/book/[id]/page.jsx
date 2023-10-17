import Booking from '@/components/Booking/Booking'

export const metadata = {
  title: 'Tour Travel | Booking',
  description: 'A tour travel website',
}

const BookEventsPage = ({params}) => {

  return (
    <div>
        <Booking  params={params.id}/>
    </div>
  )
}

export default BookEventsPage