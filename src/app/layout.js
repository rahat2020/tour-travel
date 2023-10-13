import Topbar from '@/components/Topbar/Topbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import GotoTop from '@/components/GotoTop/GotoTop';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tour Travel | Home',
  description: 'A tour travel website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Topbar/>
        {children}
        <GotoTop/>
        <Footer/>
      </body>
    </html>
  )
}
