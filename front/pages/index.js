import Navbar from './components/Navbar'
import Content from './components/Content'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="h-screen bg-blue-200 grid grid-cols-12 grid-rows-1 gap-1">
        <title>Restaurant 104 Management</title>
        <meta name="description" content="Software as a Service by Beag."/>
        <link rel="icon" href="/favicon.ico" />

    <div className="bg-blue-500 text-white text-center text-5xl"> <Navbar /></div>
    <div className="bg-blue-500 text-white text-center text-5xl col-span-11"> <Content /> </div>
    
  
    </div>
  )
}
