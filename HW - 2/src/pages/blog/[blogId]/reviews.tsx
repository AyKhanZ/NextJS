import React from 'react'
import { blogsData } from '../../../../lib/data'

interface Props {
    reviews: string[]
}

const reviews = ({reviews}: Props) => {
  return (
    <div>
        <h1>Reviews</h1>
        <ul>
            {reviews.map((r, i) => <li key={i}>{r}</li>)}
        </ul>
    </div>
  )
} 

export default reviews

export function getServerSideProps(context : any){
    console.log('context', context)
    const reviews = blogsData.find((blog) => blog.id === Number(context.params.blogId))?.reviews;

    console.log('reviews', reviews)
    return {
        props: {
            reviews
        },
    }
}