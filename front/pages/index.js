import Navbar from './components/Navbar'
import Content from './components/Content'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="h-screen bg-blue-200 grid grid-cols-2 grid-row-0 gap-1">
        <title>Restaurant 104 Management</title>
        <meta name="description" content="Software as a Service by Beag."/>
        <link rel="icon" href="/favicon.ico" />

    <div className="bg-blue-500 text-white text-center text-5xl row-span-4 sm-w-1/4 md-w-2/5 lg-w-2/5 xl-w-2/5 w-2/5"> 1 </div>
    <div className="bg-blue-500 text-white text-center text-5xl col-span-3 row-span-4 w-full"> 2 </div>
    
  
    </div>
  )
}
