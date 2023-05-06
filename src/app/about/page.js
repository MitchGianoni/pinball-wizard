import Link from 'next/link';

const About = () => {
    const title = 'About Page';
    return (
        <div className="bg-red-100 p-4 h-screen w-full flex items-center justify-center">
            <div className="text-center">
                <p className="text-2xl">{title}</p>
                <p className="text-xs">Coming Soon</p>
                <Link href="/" className="text-sm text-blue-500 hover:text-blue-300">Home</Link>
            </div>
        </div>
    );
};

export default About;
