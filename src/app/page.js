import Link from "next/link";

const Home = () => {
  return (
    <div className="p-4 h-screen w-full flex items-center justify-center">
      <div className="text-center">
        <p className="text-4xl">Pinballz Deep Restorations</p>
        <p className="text-sm pt-4">Marietta, GA</p>
        <p className="text-sm pt-4">contact@pinballzdeep.com</p>
        <Link href="/about" className="text-sm text-blue-500 hover:text-blue-300">About</Link> <br/>
        <Link href="/forsale" className="text-sm text-blue-500 hover:text-blue-300">Active Listings</Link> <br/>
        <Link href="/backlog" className="text-sm text-blue-500 hover:text-blue-300">Backlog of Projects</Link> <br/>
      </div>
    </div>
  )
}

export default Home;
