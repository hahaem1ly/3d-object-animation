import Spline from '@splinetool/react-spline';

function App() {
  return (
    <main style={{ width: "100vw", height: "100vh", position: "relative" }}>
      {/* Chat bubble */}
      <div
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          backgroundColor: "#fff",
          padding: "10px 15px",
          borderRadius: "20px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          fontSize: "14px",
          color: "#333",
        }}
      >
        Hello, I'm Emily and I made this 3D animated object.<br />
        Move around and check it out! :)
      </div>

      {/* Spline scene */}
      <Spline scene="https://prod.spline.design/zMKAtHD40SD59niM/scene.splinecode"  
 />
    </main>
  );
}

export default App;
