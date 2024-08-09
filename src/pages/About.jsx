import './About.scss';
import Banner from '../components/Banner.jsx';
import Collapse from '../components/Collapse.jsx';

function About() {
  return (
    <div>
      <Banner />
      <div className="about-details">
        <Collapse />
        <Collapse />
        <Collapse />
        <Collapse />
      </div>
    </div>
  );
}

export default About;
