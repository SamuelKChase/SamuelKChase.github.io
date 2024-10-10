// src/app/morgan-and-colton/page.tsx
import Image from 'next/image';

export default function MorganAndColton() {
  return (
    <main style={{
      padding: 0,
      margin: 0,
      height: '200vh',  // Full viewport height
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffffff', // White background
      position: 'relative'  // Allows positioning of text and vines
    }}>
      {/* Left vine - Flipped vertically and grows slowly */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100px',
        height: '0%',  // Start with 0% height for animation
        backgroundImage: 'url("/vine-left.png")',
        backgroundRepeat: 'repeat-y',  // Repeat vertically
        backgroundSize: 'contain',
        transform: 'scaleY(-1)',  // Flip the vine vertically
        zIndex: 10,  // Ensure it's visible
        animation: 'growVine 30s linear forwards'  // Slower animation over 30 seconds
      }}></div>

      {/* Right vine - Flipped vertically and grows slowly */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100px',
        height: '0%',  // Start with 0% height for animation
        backgroundImage: 'url("/vine-right.png")',
        backgroundRepeat: 'repeat-y',  // Repeat vertically
        backgroundSize: 'contain',
        transform: 'scaleY(-1)',  // Flip the vine vertically
        zIndex: 10,  // Ensure it's visible
        animation: 'growVine 30s linear forwards'  // Slower animation over 30 seconds
      }}></div>

      <div style={{
        position: 'relative',
        width: '100%',
        height: '100%',  // Take up the entire height of the viewport
      }}>
        <Image
          src="/couple/Morgan-Colton.jpg"
          alt="Morgan and Colton"
          layout="fill"
          objectFit="contain"  // Ensure the whole image is visible without being cut off
        />
        {/* Add the text overlay at the top */}
        <h1 style={{
          position: 'absolute',
          top: '10%',  // Position it near the top
          left: '50%',
          transform: 'translateX(-50%)',  // Horizontally center the text
          color: '#fff',
          fontFamily: "'Pacifico', cursive",
          fontSize: '4rem',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',  // Text shadow for contrast
          textAlign: 'center',
        }}>
          Morgan and Colton
        </h1>
      </div>

      <p style={{
        fontSize: '1.2rem',
        color: '#333',
        marginTop: '20px',
      }}>
        Join us for the reception on August 15, 2020 at 3771 West 3625 South.
      </p>
    </main>
  );
}