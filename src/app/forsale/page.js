import Link from 'next/link';

const ForSale = () => {
  const title = 'Games for Sale';

  return (
    <div className="container py-6">
      <div className="bg-gray-100 rounded-lg md:mx-16 p-4 md:flex md:justify-center md:flex-col text-center ">
        <p className="text-4xl">{ title }</p>
        <ul>
          <li className="text-sm pt-4 text-blue-500 hover:text-blue-300">
            <Link href="https://pinside.com/pinball/market/classifieds/ad/157773" target="_blank">
              The Flintstones - Williams 1994
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ForSale;
