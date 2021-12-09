import Head from 'next/head'
import Sidebar from '../components/Sidebar'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      hello
      <main>
        <Sidebar />
        {/* Sidebar */}
        {/* Center */}
      </main>
      <div>
        {/* Player */}
      </div>
    </div>
  )
}
