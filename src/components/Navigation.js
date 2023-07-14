'use client';

import Link from 'next/link';
import PropTypes from 'prop-types';

const Navigation = ({ metadata }) => {
  const navLinks = [
    { url: '', title: 'Home'},
    { url: 'about', title: 'About'},
    { url: 'forsale', title: 'For Sale' },
    { url: 'sold', title: 'Sold' },
    { url: 'backlog', title: 'Backlog' },
  ];

  const test = () => {
    // check npm run dev console to see console log from /api/hello
    fetch('/api/hello')
  }
  return (
    <div className="container py-2 w-full flex justify-between items-center border-b">

      <h1 className="text-2xl"><Link href="/">{ metadata.title }</Link></h1>

      <div className="flex space-x-4 items-center">
        <ul className="flex space-x-2">
          { navLinks.map(link => (
            <li key={ link.url }>
              <Link href={ link.url }>
                { link.title }
              </Link>
            </li>
          )) }
        </ul>

        {/*<button*/}
        {/*  type="button"*/}
        {/*  onClick={ () => test('sign in clicked!') }*/}
        {/*  className="inline-flex items-center justify-center px-4 py-1 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none"*/}
        {/*>*/}
        {/*  Sign In*/}
        {/*</button>*/}
      </div>
    </div>
  );
};

export default Navigation;

Navigation.propTypes = {
  metadata: PropTypes.object.isRequired,
};
