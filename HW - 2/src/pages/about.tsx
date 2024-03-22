import React from 'react'
import NavBar from '@/components/NavBar'
import { Inter, Roboto } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"], weight: "400" });

const About = () => {
  return (
    <>
      <NavBar />
      <main>
        <h1 className={inter.className}>About</h1>
        <p className={roboto.className}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe accusantium in doloremque laborum quod repellendus debitis ab aliquid eum unde aperiam laudantium, porro consectetur, dicta sequi illum minus error! Cumque?</p>
      </main>
    </>
  )
}

export default About