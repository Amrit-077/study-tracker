import hero from "../assets/hero.png";

function Home() {

const studentName =
  localStorage.getItem("studentName") || "Guest";

const isLoggedIn =
  localStorage.getItem("isLoggedIn");

  const logout = () => {
  localStorage.removeItem("studentName");
  localStorage.removeItem("isLoggedIn");
  window.location.reload();
};
<button onClick={logout}>
  Logout
</button>

  return (
    <div>

      <h1>Student Study Tracker</h1>

      <h2>Welcome {studentName}</h2>

<p>
  Status:
  {isLoggedIn ? " Logged In" : " Not Logged In"}
</p>
<h2>Developed By</h2>

<p>Amrit Paudel</p>
<p>Aman Kumar Gupta</p>

    </div>
  );
}

export default Home;