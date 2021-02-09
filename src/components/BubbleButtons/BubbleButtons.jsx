import React from 'react';
import './BubbleButtons.css';

const BubbleButtons = ({ top, bottom, left, right, children }) => {
  const [displayText, setDisplayText] = React.useState(false);
  const [positions, setPositions] = React.useState({
    posTop: top,
    posBottom: bottom,
    posLeft: left,
    posRight: right,
  });
  const buttonRef = React.useRef(null);
    React.useEffect(() => {
        console.log('HERE');
    if (buttonRef.current) {
      buttonRef.current.addEventListener('mouseenter', () => {
        setDisplayText(true);
        setPositions({
          posTop: top ? 0 : top,
          posBottom: bottom ? 0 : bottom,
          posLeft: left ? 0 : left,
          posRight: right ? 0 : right,
        });
      });
      buttonRef.current.addEventListener('mouseleave', () => {
        setDisplayText(false);
        setPositions({
          posTop: top,
          posBottom: bottom,
          posLeft: left,
          posRight: right,
        });
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [buttonRef]);
  return (
    <button
      ref={buttonRef}
      style={{
        top: positions.posTop,
        bottom: positions.posBottom,
        left: positions.posLeft,
        right: positions.posRight,
      }}
      id='ripple'
      className='bubble-button text-center'
    >
      {displayText && <>{children}</>}
      {!displayText && <>?</>}
    </button>
  );
};

export default BubbleButtons;
