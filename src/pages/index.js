import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

import { useHtml } from '@/hooks/useHtml'
import { useEffect, useState } from 'react'


export default function Home() {

  const {startGetHtml,data} = useHtml()
  const [datas, setDatas] = useState([])

  useEffect(() => {
    startGetHtml()
  },[])

  return (
    <>
      <Head>
        {data}
      </Head>
      <main >
        
      </main>
    </>
  )
}
