import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Wedding Website',
  description: 'Personalized wedding site',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
      </head>
      <body>
        <nav style={{
          padding: '1.2rem',
          backgroundColor: '#f8f9fa', 
          display: 'flex', 
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '50px',
          fontFamily: "'Pacifico', cursive" // Apply the fun, loopy font here
        }}>
          <ul style={{
            listStyle: 'none', 
            display: 'flex', 
            gap: '50px', 
            margin: 0, 
            padding: 0,
          }}>
            {/* Updated navigation links with fun font */}
            <li><Link href="/morgan-and-colton">Morgan and Colton</Link></li>
            <li><Link href="/aspen-and-john">Aspen and John</Link></li>
            <li><Link href="/dillon-and-macquell">Dillon and Macquell</Link></li>
            <li><Link href="/couple">About the Couple</Link></li>
            <li><Link href="/wishlist">Wishlist</Link></li>
          </ul>
          <div style={{ marginLeft: 'auto' }}>
            <Link href="/about-website">About This Website</Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}