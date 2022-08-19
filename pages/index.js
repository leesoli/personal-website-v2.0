import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import About from '../components/About';
import Work from '../components/Work';
import Contact from '../components/Contact';

export default function Home() {

  return (
    <div className="font-serif">
      <Head>
        <title>Anna Lee Frontend Developer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header/>
      <About/>
      <Work/>
      <Contact />
    </div>
  )
}
