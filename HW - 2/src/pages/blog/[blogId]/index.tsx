import React from 'react'
import { useRouter } from 'next/router'
import { Blog } from '@/types'
import { blogsData } from '../../../../lib/data'
import Link from 'next/link'

interface Props {
    blog: Blog
}
 
const BlogDetails = ({blog}: Props) => {
  const route = useRouter()

  console.log(route.asPath)
 
  const {id, title, text} = blog;

  return ( 
    <div>
        <h1>BlogDetails if is - {id}</h1>
        <h2>{title}</h2>
        <p>{text}</p>
        <Link href={route.asPath + '/reviews'}>Reviews</Link>
    </div>
  )
}

export default BlogDetails

export function getServerSideProps(context: any) {
    console.log('context', context)

    const {params} = context;

    const blog = blogsData.find((blog) => blog.id === Number(params.blogId))

    return {
        props: {
            blog
        }
    }
}