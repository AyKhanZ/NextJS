import React from 'react'
import Link from 'next/link'
import styles from "@/styles/Home.module.css";
import { Inter, Roboto } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"], weight: "400" });

const NavBar = () => {
  return (
    <nav  className={styles.navbar}> 
        <Link className={`${styles.link} ${roboto.className}`} href='/'>Home</Link>
        <Link className={`${styles.link} ${roboto.className}`} href='/about'>About</Link>
        <Link className={`${styles.link} ${roboto.className}`} href='/contacts'>Contacts</Link>
        <Link className={`${styles.link} ${roboto.className}`} href='/blog'>Blog</Link>
        <Link className={`${styles.link} ${roboto.className}`} href='/account'>Account</Link>
    </nav>
  )
}

export default NavBar