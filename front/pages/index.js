import Head from 'next/head'
import Navbar from './components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Restaurant 104 Management</title>
        <meta name="description" content="Software as a Service by Beag."/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>

    </div>
  )
}
