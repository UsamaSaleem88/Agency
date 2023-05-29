import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/Components/Navbar'
import Agencycreate from '@/Components/Agencycreate'
import Quality from '@/Components/Quality'
import Buildmoreapp from '@/Components/Buildmoreapp'
import Latestwork from '@/Components/Latestwork'
import Subscriptiontiers from '@/Components/Subscriptiontiers'
import Slider from '@/Components/Slider'
import Mobilenavbar from '@/Components/Mobilenavbar'
import Outside from '@/Components/useOutside'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (

    <div>
      <Navbar />

      <Agencycreate />
      <Slider />
      <Quality />
      <Buildmoreapp />
      <Latestwork />
      <Subscriptiontiers />


    </div>





  )
}
