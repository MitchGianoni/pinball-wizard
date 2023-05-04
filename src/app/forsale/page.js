import Link from "next/link";

const ForSale = () => {

  return (
    <div className="bg-blue-100 p-4 h-screen w-full flex items-center justify-center">
      <p className="text-4xl">Games for Sale</p>
      <ul>
        <li className="text-sm pt-4">Dr. Dude, Bally 1990</li>
        <li className="text-sm pt-4">Guns N' Roses, Data East 1994</li>
        <li className="text-sm pt-4">Flash, Williams 1979 (PROJECT AS IS)</li>
      </ul>
      <Link href="/" className="text-sm text-blue-500 hover:text-blue-300">Home</Link>
    </div>
  )
}

export default ForSale;
