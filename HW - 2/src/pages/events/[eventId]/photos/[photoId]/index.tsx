import React from 'react'
import Image from 'next/image';
import { eventsData } from '../../../../../../lib/data';
import styles from "@/styles/Home.module.css";
import { Inter, Roboto } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"], weight: "400" });

interface Props {
  photo: string
}

const Photo = ({photo}: Props) => {
  console.log(photo)
  return (
    <div>
        <h1>Photo</h1>
        <p>{photo}</p>
        <Image width={500} height={300} alt='Image' src={photo} />
    </div>
  )
}

export default Photo;

export function getServerSideProps(context: any) {
  const {params} = context
  console.log(params)
  const event = eventsData.find((ev, i) => ev.id === Number(params.eventId))
  const photo = event?.photos.find((p, i) => i === Number(params.photoId))
  return {
      props: {
        photo
      }
  }
}