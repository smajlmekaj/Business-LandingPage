import * as React from 'react';

const SvgComponent = (props) => (
  <svg
    width={22}
    height={22}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14 1.458A9.996 9.996 0 0 0 11 1C5.477 1 1 5.477 1 11s4.477 10 10 10 10-4.477 10-10c0-1.715-.432-3.33-1.193-4.74M16 4.75h.005M9.5 20.888v-2.203a.5.5 0 0 1 .12-.325l2.486-2.9a.5.5 0 0 0-.131-.76l-2.856-1.632a.5.5 0 0 1-.187-.187L7.07 9.62a.5.5 0 0 0-.478-.25l-5.528.492M20 5c0 2.21-2 4-4 6-2-2-4-3.79-4-6a4 4 0 0 1 8 0Zm-3.75-.25a.25.25 0 1 1-.5 0 .25.25 0 0 1 .5 0Z"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgComponent;
