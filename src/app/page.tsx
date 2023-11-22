import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-between p-24">
      <h1 className='my-8 text-2xl font-semibold'>Home Page</h1>
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
