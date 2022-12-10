import Navbar from './components/Navbar'
import Content from './components/Content'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="h-screen bg-blue-200 p-1 grid grid-cols-4  grid-rows-4 gap-1">
        <title>Restaurant 104 Management</title>
        <meta name="description" content="Software as a Service by Beag."/>
        <link rel="icon" href="/favicon.ico" />

    <div className="bg-blue-500 text-white text-center text-5xl py-4 rounded-lg row-span-4 min-sm-w-2/5 max-lg-w-2/4 w-2/4"> 1 </div>
    <div className="bg-blue-500 text-white text-center text-5xl py-4 rounded-lg col-span-3"> 2 </div>
    <div className="bg-blue-500 text-white text-center text-5xl py-4 rounded-lg row-span-3 col-span-3"> 3 </div>

    
  
    </div>
  )
}
