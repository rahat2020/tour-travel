import Notfound from "@/components/NotFound"

export const metadata = {
  title: 'Tour Travel | Not found',
  description: 'A tour travel website',
}

const NotFound = () => {
  return (
    <div className='d-flex justify-content-center align-items-center w-100 h-100'>
      <Notfound />
    </div>
  )
}

export default NotFound