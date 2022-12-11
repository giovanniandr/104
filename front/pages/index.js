import Navbar from './components/Navbar'
import Content from './components/Content'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="h-screen flex">
        <title>Restaurant 104 Management</title>
        <meta name="description" content="Software as a Service by Beag."/>
        <link rel="icon" href="/favicon.ico" />
        <Navbar />
        <Content />
    </div>
  )
}
