// src/app/aspen-and-john/page.tsx
import Image from 'next/image';

export default function AspenAndJohn() {
  return (
    <main style={{
      padding: 0,
      margin: 0,
      height: '100vh',
      backgroundColor: '#ffffff', // White background
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div style={{
        position: 'relative',
        width: '100%',
        height: '80vh',  // Image takes up 80% of the screen height
      }}>
        <Image
          src="/couple/Aspen-John.jpg" // Assuming the image is in the public folder
          alt="Aspen and John"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <h1 style={{
        color: '#000', // Black text
        fontFamily: "'Pacifico', cursive", // Loopy font for Aspen and John
        fontSize: '3rem',
        marginTop: '20px',
      }}>
        Aspen and John
      </h1>
      <p style={{
        fontSize: '1.2rem',
        color: '#333',
      }}>
        Join us for the reception on August 15, 2020 at 3771 West 3625 South.
      </p>
    </main>
  );
}