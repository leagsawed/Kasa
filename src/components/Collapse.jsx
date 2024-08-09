import './Collapse.scss';

function Collapse(props) {
  console.log(props);
  return (
    <div className="collapse-panel">
      <div className="collapse-title">
        <span>{props.title}</span>
        <i className="fa-solid fa-chevron-up"></i>
      </div>
      <p className="collapse-content">{props.content}</p>
    </div>
  );
}

export default Collapse;
