import './globals.css';
import { Inter } from 'next/font/google';
import PropTypes from 'prop-types';
import Navigation from '@/components/Navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Pinballz Deep',
    description: 'Pinball Restorations',
};

const RootLayout = ({ children }) => (
    <html lang="en">
        <body className={inter.className}>
            <header>
                <Navigation metadata={metadata} />
            </header>
            {children}
        </body>
    </html>
);

export default RootLayout;

RootLayout.propTypes = {
    children: PropTypes.array.isRequired,
};
