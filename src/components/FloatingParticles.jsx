import "./FloatingParticles.css";

function FloatingParticles() {

  const particles = [...Array(12)];

  return (
    <div className="particles">
      {particles.map((_, i) => (
        <span
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${8 + Math.random() * 8}s`
          }}
        />
      ))}
    </div>
  );
}

export default FloatingParticles;