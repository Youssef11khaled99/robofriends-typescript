import * as React from 'react';

interface Props {
  children?: JSX.Element
}

const Scroll = (props : Props) => (
  <div style={{ overflow: 'scroll', border: '5px solid black', height: '800px' }}>
    {props.children}
  </div>
);

export default Scroll;