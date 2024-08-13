import './CollapsePanel.scss';
import { useState } from 'react';

function CollapsePanel(props) {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const showContent = () => {
    setIsContentVisible(!isContentVisible);
  };

  const contentClass =
    (isContentVisible ? 'visible ' : 'hidden ') + 'collapse-content';

  const chevronClass =
    (isContentVisible ? 'visible' : 'hidden') + ' fa-solid fa-chevron-up';

  return (
    <div className="collapse-panel">
      <div className="collapse-title" onClick={showContent}>
        <span>{props.title}</span>
        <i className={chevronClass}></i>
      </div>
      <p className={contentClass}>{props.content}</p>
    </div>
  );
}

export default CollapsePanel;
