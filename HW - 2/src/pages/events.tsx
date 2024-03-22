import React from 'react'
import NavBar from '@/components/NavBar'
import { Inter, Roboto } from "next/font/google";
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from "@/styles/Home.module.css";
import { eventsData } from '../../lib/data';

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"], weight: "400" });

const Blog = () => {
  const router = useRouter()
  return (
    <> 
      <NavBar />
      <main>
        <h1 className={inter.className}>Events</h1>
        <p className={roboto.className}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe accusantium in doloremque laborum quod repellendus debitis ab aliquid eum unde aperiam laudantium, porro consectetur, dicta sequi illum minus error! Cumque?</p>
        <div className={styles.blogs}>{eventsData.map((ev, i) => <Link className={`${styles.link} ${roboto.className}`} key={i} href={`/events/${ev.id}`}>{ev.title}</Link>)}</div>
      </main> 
    </>
  )
}

export default Blog