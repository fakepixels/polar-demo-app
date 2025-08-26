// Temporary fallback page for debugging Vercel deployment
export default function Home() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#000', 
      color: '#fff', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      fontFamily: 'monospace'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>FAKEPIXELS</h1>
        <p>Payment app loading...</p>
        <p style={{ fontSize: '0.8rem', opacity: 0.6 }}>If you see this, the deployment is working</p>
      </div>
    </div>
  );
}