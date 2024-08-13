import './About.scss';
import Banner from '../components/Banner.jsx';
import CollapsePanel from '../components/CollapsePanel.jsx';

function About() {
  const fiabilite =
    'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.';
  const respect =
    'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.';
  const service =
    'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.';
  const securite =
    "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes";

  return (
    <div>
      <Banner title=" " image="Banner2.png" />
      <div className="about-details">
        <CollapsePanel title="Fiabilité" content={fiabilite} />
        <CollapsePanel title="Respect" content={respect} />
        <CollapsePanel title="Service" content={service} />
        <CollapsePanel title="Sécurité" content={securite} />
      </div>
    </div>
  );
}

export default About;
