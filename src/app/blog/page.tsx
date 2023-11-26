import Image from "next/image"
import { Metadata } from "next"

// For Template property title
export const metadata: Metadata = {
  // title: {
  //   absolute: "Blog"    // Output: "Blog"
  // }
  title: "Blog",    // Output: "Blog | Next 14"
}

const BlogPage = () => {
  return (
    <section className="flex min-h-screen items-center justify-between p-24">
        <h1 className='my-8 text-2xl font-semibold'>Blog Page</h1>
        <Image
            className="relative flex justify-center items-center dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
        />
    </section>
  )
}

export default BlogPage