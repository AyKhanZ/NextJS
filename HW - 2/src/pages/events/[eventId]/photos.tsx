import React from 'react'
import { eventsData } from '../../../../lib/data'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from "@/styles/Home.module.css";
import { Inter, Roboto } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"], weight: "400" });

interface Props {
    photos: string[]
}

const Photos = ({photos}: Props) => {
    const route = useRouter()
  return (
    <div>
        <h1>Photos:</h1>
        <ul>
            {photos.map((p: string, i: number) => <Link className={`${styles.link} ${roboto.className}`} key={i} href={route.asPath + '/' + i}>{p}</Link>)}
        </ul>
    </div>
  )
} 

export default Photos

export function getServerSideProps(context : any){
    console.log('context', context)
    const photos = eventsData.find((ev) => ev.id === Number(context.params.eventId))?.photos;

    console.log('photos', photos)
    return {
        props: {
            photos
        },
    }
}