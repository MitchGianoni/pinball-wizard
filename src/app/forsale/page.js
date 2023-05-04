import Link from "next/link";

const ForSale = () => {

  return (
    <div className="bg-blue-100 p-4 h-screen w-full flex items-center justify-center">
      <p className="text-4xl">Games for Sale</p>
      <ul>
        <li className="text-sm pt-4 text-blue-500 hover:text-blue-300">
          <Link href="https://pinside.com/pinball/market/classifieds/ad/154821">Dr. Dude, Bally 1990</Link>
        </li>
        <li className="text-sm pt-4 text-blue-500 hover:text-blue-300">
          <Link href="https://pinside.com/pinball/market/classifieds/ad/155981">Guns N' Roses, Data East 1994</Link>
        </li>
        <li className="text-sm pt-4 text-blue-500 hover:text-blue-300">
          <Link href="https://pinside.com/pinball/market/classifieds/ad/156277">Flash, Williams 1979 (PROJECT)</Link>
        </li>
      </ul>
      <Link href="/" className="text-sm text-blue-500 hover:text-blue-300">Home</Link>
    </div>
  )
}

export default ForSale;
