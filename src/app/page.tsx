import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-between p-24">
      <div className='flex flex-row items-center'>
        <h1 className='my-8 text-2xl font-semibold'>Home Page</h1>

        {/* Link Component */}
        <Link 
          href='/blog'
          className='text-blue-400 ml-8'
        >
          Blog
        </Link>
        <Link 
          href='/product'
          className='text-blue-400 ml-8'
          replace   // back to the root page to replace the current history state
        >
          Product
        </Link>
      </div>
      <Image
        className="relative flex justify-center items-center dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />
    </main>
  )
}
