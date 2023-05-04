import Link from "next/link";

const Backlog = () => {

  return (
    <div className="bg-yellow-100 p-4 h-screen w-full flex items-center justify-center">
      <p className="text-4xl">Projects in our Backlog</p>
      <ul>
        <li className="text-sm pt-4">Vegas, Gottlieb 1990</li>
        <li className="text-sm pt-4">Mousin' Around, Bally 1989</li>
        <li className="text-sm pt-4">Bobby Orr's Power Play, Bally 1978</li>
        <li className="text-sm pt-4">Simpsons Pinball Party, Stern 2003</li>
        <li className="text-sm pt-4">Space Shuttle, Williams 1984</li>
        <li className="text-sm pt-4">Captain Hook, Game Plan 1985</li>
        <li className="text-sm pt-4">Fathom, Bally 1981</li>
        <li className="text-sm pt-4">Mr. & Mrs. Pac-Man, Bally 1982</li>
      </ul>
      <Link href="/" className="text-sm text-blue-500 hover:text-blue-300">Home</Link>
    </div>
  )
}

export default Backlog;
