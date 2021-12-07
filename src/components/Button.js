import React from 'react';
import { Button } from '@chakra-ui/react'
import PropTypes from 'prop-types';
import './button.css';



export default function CButton({...props}) {
  return (
        <Button
     bg="brand.100" 
     {...props}
     >
      Click Me
    </Button>
  )
}

// export const CButton = ({...props}) => {
//   return (
//     <Button
//      bg="brand.100" 
//      {...props}
//      >
//       Click Me
//     </Button>
//   )
// }

CButton.propTypes = {
  onClick: PropTypes.func
}

CButton.defaultProps = {
  onClick: undefined
}

/**
 * Primary UI component for user interaction
 */
// export const Button = ({ primary, backgroundColor, size, label, ...props }) => {
//   const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
//   return (
//     <button
//       type="button"
//       className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
//       style={backgroundColor && { backgroundColor }}
//       {...props}
//     >
//       Click Me
//     </button>
//   );
// };

// Button.propTypes = {
//   /**
//    * Is this the principal call to action on the page?
//    */
//   primary: PropTypes.bool,
//   /**
//    * What background color to use
//    */
//   backgroundColor: PropTypes.string,
//   /**
//    * How large should the button be?
//    */
//   size: PropTypes.oneOf(['small', 'medium', 'large']),
//   /**
//    * Button contents
//    */
//   label: PropTypes.string.isRequired,
//   /**
//    * Optional click handler
//    */
//   onClick: PropTypes.func,
// };

// Button.defaultProps = {
//   backgroundColor: null,
//   primary: false,
//   size: 'medium',
//   onClick: undefined,
// };