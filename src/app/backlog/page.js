import Link from 'next/link';

const Backlog = () => {
  const title = 'Projects in our Backlog';

  return (
    <div className="container py-6">
      <div className="bg-gray-100 rounded-lg md:mx-16 p-4 md:flex md:justify-center md:flex-col text-center ">
        <p className="text-4xl">{ title }</p>
        <br/>
        <div>
          <p className="text-sm pt-4">All of the following are available unless otherwise noted. Please email if you
            have any questions </p>
          <p className="text-sm pt-4">contact@pinballzdeep.com</p>
        </div>
        <div className="flow-root">
          <div className="float-left">
            <ul>
              <li className="text-sm pt-4">Mousin&apos; Around - Bally 1989</li>
              <li className="text-sm pt-4">Vegas - Gottlieb 1990</li>
              <li className="text-sm pt-4">Space Shuttle - Williams 1984</li>
              <li className="text-sm pt-4">Captain Hook - Game Plan 1985</li>
              <li className="text-sm pt-4">Fathom - Bally 1981</li>
              <li className="text-sm pt-4">Demolition Man - Williams 1994</li>
              <li className="text-sm pt-4">F-14 Tomcat - Williams 1987</li>
              <li className="text-sm pt-4">Terminator 2 - Williams 1991</li>
              <li className="text-sm pt-4">Party Zone - Bally 1991</li>
              <li className="text-sm pt-4">Popeye Saves The Earth - Bally 1994</li>
              <li className="text-sm pt-4">WWF Royal Rumble - Data East 1994</li>
              <li className="text-sm pt-4">Mario Andretti Racing - Gottlie 1995</li>
              <li className="text-sm pt-4">Jack*Bot - Williams 1995</li>
              <li className="text-sm pt-4">Taxi - Williams 1988</li>
              <li className="text-sm pt-4">Police Force - Williams 1989</li>
              <li className="text-sm pt-4">Rescue 911 - Gottlieb 1994</li>
              <li className="text-sm pt-4">Doctor Who - Bally 1992</li>
            </ul>
          </div>
          <div className="float-right">
            <p className="text-4xl">EM Games</p>
            <ul>
              <li className="text-sm pt-4">Pro-Football - Gottlieb 1973*</li>
              <li className="text-sm pt-4">Big Show - Bally 1974*</li>
              <li className="text-sm pt-4">Safari - Bally 1968*</li>
              <li className="text-sm pt-4">Freedom - Bally 1976*</li>
              <li className="text-sm pt-4">Spanish Eyes - Williams 1972*</li>
              <li className="text-sm pt-4">Shangri-La - Williams 1967*</li>
              <li className="text-sm pt-4">Old Chicago - Bally 1976*</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backlog;
