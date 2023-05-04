// 'use client';
import Link from "next/link";
import { metadata } from "@/app/layout";

const navLinks = [
    { url: 'forsale', title: 'For Sale' },
    { url: 'backlog', title: 'Backlog' }
];

const Navigation = () => {
    return (
        <div className="container py-2 w-full flex justify-between items-center border-b">

            <h1 className="text-2xl"><Link href="/">{metadata.title}</Link></h1>

            <div className="flex space-x-4 items-center">
                <ul className="flex space-x-4">
                    {navLinks.map(link => (
                        <li key={link.url}>
                            <Link href={link.url}>
                                {link.title}
                            </Link>
                        </li>
                    ))}
                </ul>

                <button className="inline-flex items-center justify-center px-4 py-1 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none">
                    Sign In
                </button>
            </div>
        </div>
    )
}

export default Navigation;
