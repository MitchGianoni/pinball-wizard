import Link from "next/link";

const ForSale = () => {

  return (
    <div className="bg-blue-100 p-4 h-screen w-full flex flex-col items-center justify-center">
      <Link href="/" className="text-sm text-blue-500 hover:text-blue-300 p-4">Home</Link>

      <p className="text-4xl">Games for Sale</p>
      <ul>
        <li className="text-sm pt-4 text-blue-500 hover:text-blue-300">
          <Link href="https://pinside.com/pinball/market/classifieds/ad/154821" target="_blank">
            Dr. Dude, Bally 1990
          </Link>
        </li>
        <li className="text-sm pt-4 text-blue-500 hover:text-blue-300">
          <Link href="https://pinside.com/pinball/market/classifieds/ad/155981" target="_blank">
            Guns N' Roses, Data East 1994
          </Link>
        </li>
        <li className="text-sm pt-4 text-blue-500 hover:text-blue-300">
          <Link href="https://pinside.com/pinball/market/classifieds/ad/156277" target="_blank">
            Flash, Williams 1979 (PROJECT)
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default ForSale;
