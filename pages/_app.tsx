import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <div className='grid grid-cols-12 gap-6 my-14 px-5 lg:px-48 sm:px-20 md:px-32'>
    <div className='lg:col-span-3 col-span-12 bg-neutral-100 rounded-2xl p-4 text-center'>
      <Sidebar />
    </div>
    <div className='flex flex-col lg:col-span-9 col-span-12 bg-neutral-100 rounded-2xl'>
      <Navbar />
      <Component {...pageProps} />
    </div>
  </div>
   
}
