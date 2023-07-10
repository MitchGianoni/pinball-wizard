import Link from 'next/link';

const About = () => {
  const title = 'About Page';
  return (
    <div className="container py-6">
      <div className="bg-gray-100 rounded-lg md:mx-16 p-4 md:flex md:justify-center md:flex-col text-center">
        <p className="text-2xl">{ title }</p>
        <br/>
        <p className="text-sm pt-4">contact@pinballzdeep.com</p>
      </div>
    </div>
  );
};

export default About;
