import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to Our Wedding</h1>
      <nav>
        <ul>
          <li><Link href="/reception">Reception Details</Link></li>
          <li><Link href="/couple">Meet the Couple</Link></li>
          <li><Link href="/wishlist">Wishlist</Link></li>
        </ul>
      </nav>
    </div>
  );
}