import Link from 'next/link';

const Backlog = () => {
    const title = 'Projects in our Backlog';

    return (
        <div className="bg-yellow-100 p-4 h-screen w-full flex flex-col items-center justify-center">
            <Link href="/" className="text-sm text-blue-500 hover:text-blue-300 p-3">Home</Link>

            <p className="text-4xl">{title}</p>
            <ul>
                <li className="text-sm pt-4">Vegas, Gottlieb 1990</li>
                <li className="text-sm pt-4">Mousin&apos; Around, Bally 1989</li>
                <li className="text-sm pt-4">Bobby Orr&apos;s Power Play, Bally 1978</li>
                <li className="text-sm pt-4">Simpsons Pinball Party, Stern 2003</li>
                <li className="text-sm pt-4">Space Shuttle, Williams 1984</li>
                <li className="text-sm pt-4">Captain Hook, Game Plan 1985</li>
                <li className="text-sm pt-4">Fathom, Bally 1981</li>
                <li className="text-sm pt-4">Mr. & Mrs. Pac-Man, Bally 1982</li>
            </ul>
        </div>
    );
};

export default Backlog;
