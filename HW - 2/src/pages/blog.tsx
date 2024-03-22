import React from 'react'
import NavBar from '@/components/NavBar'
import { Inter, Roboto } from "next/font/google";
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from "@/styles/Home.module.css";
import { blogsData } from '../../lib/data';

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"], weight: "400" });

const Blog = () => {
  const router = useRouter()
  return (
    <> 
      <NavBar />
      <main>
        <h1 className={inter.className}>Blog</h1>
        <p className={roboto.className}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe accusantium in doloremque laborum quod repellendus debitis ab aliquid eum unde aperiam laudantium, porro consectetur, dicta sequi illum minus error! Cumque?</p>
        <div><button onClick={() => router.push(`/blog/2`)}>Blog 2</button></div>
        <div className={styles.blogs}>{blogsData.map((b, i) => <Link className={`${styles.link} ${roboto.className}`} key={i} href={`/blog/${b.id}`}>{b.title}</Link>)}</div>
      </main> 
    </>
  )
}

export default Blog