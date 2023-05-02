import Link from "next/link";

const Home = () => {
    return (
        <div className="p-4 h-screen w-full flex items-center justify-center">
            <div className="text-center">
                <p className="text-4xl">Pinballz Deep</p>
                <p className="text-sm pt-4">The Pinball Wizard</p>
                <Link href="/about" className="text-sm text-blue-500 hover:text-blue-300">About</Link>
            </div>
        </div>
    )
}

export default Home;
