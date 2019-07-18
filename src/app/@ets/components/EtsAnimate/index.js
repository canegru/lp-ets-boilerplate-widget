import React from 'react';
import PropTypes from 'prop-types';
import { VelocityComponent } from 'velocity-react';
import 'velocity-animate/velocity.ui';

const EtsAnimate = (props) => {
  // Need to clone element in case multiple anims are called
  const children = React.cloneElement(props.children, {
    style: {
      ...props.children.style,
      visibility: 'hidden'
    }
  });
  return <VelocityComponent {...props} children={children} />
};

EtsAnimate.propTypes = {
  children: PropTypes.element.isRequired
};

EtsAnimate.defaultProps = {
  animation: 'transition.fadeIn',
  runOnMount: true,
  targetQuerySelector: null,
  interruptBehavior: 'stop',
  visibility: 'visible',
  duration: 300,
  delay: 50,
  easing: [0.4, 0.0, 0.2, 1],
  display: null,
  setRef: undefined
};

export default React.memo(EtsAnimate);
