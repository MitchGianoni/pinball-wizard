import Link from 'next/link';

const Backlog = () => {
  const title = 'Projects in our Backlog';

  return (
    <div className="container py-6">
      <div className="bg-gray-100 rounded-lg md:mx-16 p-4 md:flex md:justify-center md:flex-col text-center">
        <p className="text-4xl">{ title }</p>
        <br/>
        <div>
          <p className="text-sm pt-4">All of the following are available unless otherwise noted. Please email if you
            have any questions. </p>
          <p className="text-sm pt-4">contact@pinballzdeep.com</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <div>
            <br/>
            <p className="text-4xl">SS Games</p>
            <ul className="text-sm pt-4">
              <li>Mousin&apos; Around - Bally 1989</li>
              <li>Vegas - Gottlieb 1990</li>
              <li>Space Shuttle - Williams 1984</li>
              <li>The Simpson&apos;s Pinball Party - Stern 2003*</li>
              <li>Captain Hook - Game Plan 1985</li>
              <li>Fathom - Bally 1981</li>
              <li>Demolition Man - Williams 1994</li>
              <li>F-14 Tomcat - Williams 1987</li>
              <li>Terminator 2 - Williams 1991</li>
              <li>Party Zone - Bally 1991</li>
              <li>Popeye Saves The Earth - Bally 1994</li>
              <li>WWF Royal Rumble - Data East 1994</li>
              <li>Mario Andretti Racing - Gottlie 1995</li>
              <li>Jack*Bot - Williams 1995</li>
              <li>Taxi - Williams 1988</li>
              <li>Police Force - Williams 1989</li>
              <li>Rescue 911 - Gottlieb 1994</li>
              <li>Doctor Who - Bally 1992</li>
              <li>Excalibur - Gottlieb 1988</li>
            </ul>
          </div>
          <div>
            <br/>
            <p className="text-4xl">EM Games</p>
            <ul className="text-sm pt-4">
              <li>Pro-Football - Gottlieb 1973</li>
              <li>Big Show - Bally 1974</li>
              <li>Safari - Bally 1968</li>
              <li>Freedom - Bally 1976</li>
              <li>Spanish Eyes - Williams 1972</li>
              <li>Shangri-La - Williams 1967</li>
              <li>Old Chicago - Bally 1976</li>
            </ul>
          </div>
        </div>
        <br/>
        <p>* = Reserved</p>
      </div>
    </div>
  );
};

export default Backlog;
