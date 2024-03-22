import React from 'react'
import { useRouter } from 'next/router'
import { Event } from '@/types'
import { eventsData } from '../../../../lib/data'
import Link from 'next/link'
import styles from "@/styles/Home.module.css";
import { Inter, Roboto } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"], weight: "400" });

interface Props {
    event: Event
}
 
const BlogDetails = ({event}: Props) => {
  const route = useRouter()

  console.log(route.asPath)
  
  const {id, title, photos} = event;

  return ( 
    <div>
        <h2>{title}</h2>
        <Link  className={`${styles.link} ${roboto.className}`} href={route.asPath + '/photos'}>Photos</Link>
    </div>
  )
}

export default BlogDetails

export function getServerSideProps(context: any) {
    console.log('context', context)

    const {params} = context;

    const event = eventsData.find((ev) => ev.id === Number(params.eventId))

    return {
        props: {
            event
        }
    }
}