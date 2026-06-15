import reactImg from "../assets/react.png";
import promptImg from "../assets/prompt.png";
import databaseImg from "../assets/database.png";
import javaImg from "../assets/java.png";
import bigdataImg from "../assets/bigdata.png";

function Subjects() {
  const subjects = [
    {
      name: "React",
      image: reactImg,
      description: "Building modern web applications using React."
    },
    {
      name: "Prompt Engineering",
      image: promptImg,
      description: "Creating effective prompts for AI systems."
    },
    {
      name: "Database Design",
      image: databaseImg,
      description: "Designing ER diagrams and databases."
    },
    {
      name: "Java",
      image: javaImg,
      description: "Object-oriented programming and software development."
    },
    {
      name: "Big Data",
      image: bigdataImg,
      description: "Analyzing and processing large datasets."
    }
  ];

  return (
    <div>
      <h1>My Subjects</h1>

      {subjects.map((subject, index) => (
        <div className="subject-card" key={index}>
          <img src={subject.image} alt={subject.name} />
          <h2>{subject.name}</h2>
          <p>{subject.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Subjects;