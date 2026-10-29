import Header from "../components/Header.jsx";
import Card from "../components/Card.jsx";
import { languageData } from "../data/data.js";
function About() {
  return (
    <div>
      <Header />
      <div className="card-container">
        {languageData.map((lang) => (
          <Card
            image={lang.image}
            title={lang.title}
            description={lang.description}
          />
        ))}
      </div>
    </div>
  );
}

export default About;
