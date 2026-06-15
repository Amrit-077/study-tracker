import hero from "../assets/hero.png";

function Home() {
  return (
    <div className="home">
      <h1>Student Study Tracker</h1>

      <img src={hero} alt="Hero" className="hero-image" />

      <h2>Amrit Paudel & Aman Kumar Gupta</h2>

      <p>IT Engineering Students at Ulsan College</p>

      <p>
        Welcome to our React Final Project.
        This website helps students manage
        subjects, assignments and study progress.
      </p>
    </div>
  );
}

export default Home;