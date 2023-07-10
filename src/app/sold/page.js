import Link from 'next/link';

const Sold = () => {
  const title = 'Games Restored';

  return (
    <div className="container py-6">
      <div className="bg-gray-100 rounded-lg md:mx-16 p-4 md:flex md:justify-center md:flex-col text-center">
        <p className="text-4xl">{ title }</p>
        <ul>
          <li className="text-sm pt-4 text-blue-500 hover:text-blue-300">
            <Link href="https://pinside.com/pinball/market/classifieds/archive/158559" target="_blank">
              Bobby Orr's Power Play - Bally 1978
            </Link>
          </li>
          <li className="text-sm pt-4">Mr. & Mrs. Pac-Man - Bally 1982*</li>
          <li className="text-sm pt-4">Flash - Williams 1979*</li>
          <li className="text-sm pt-4 text-blue-500 hover:text-blue-300">
            <Link href="https://pinside.com/pinball/market/classifieds/archive/154821" target="_blank">
              Dr. Dude - Bally 1990
            </Link>
          </li>
          <li className="text-sm pt-4 text-blue-500 hover:text-blue-300">
            <Link href="https://pinside.com/pinball/market/classifieds/archive/157770" target="_blank">
              Austin Powers - Stern 2001
            </Link>
          </li>
          <li className="text-sm pt-4 text-blue-500 hover:text-blue-300">
            <Link href="https://pinside.com/pinball/market/classifieds/archive/155981" target="_blank">
              Guns N' Roses - Data East 1994
            </Link>
          </li>
          <li className="text-sm pt-4 text-blue-500 hover:text-blue-300">
            <Link href="https://pinside.com/pinball/market/classifieds/archive/156093" target="_blank">
              Meteor - Stern 1979
            </Link>
          </li>
        </ul>
        <br/>
        <p className="text-xs">* - Sold as project</p>
      </div>
    </div>
  );
};

export default Sold;
