import './About.scss';
import Banner from '../components/Banner.jsx';
import Collapse from '../components/Collapse.jsx';

function About() {
  return (
    <div>
      <Banner />
      <div className="about-details">
        <Collapse title="Fiabilité" />
        <Collapse title="Respect" />
        <Collapse title="Service" />
        <Collapse title="Sécurité" />
      </div>
    </div>
  );
}

export default About;
