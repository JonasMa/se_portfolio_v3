import React from 'react';

// We can't construct the color dynamically because tailwind will only recognise unbroken class strings in the source code
const borderColor = {
  black: 'border-black',
  grey: 'border-grey',
  yellow: 'border-yellow',
}
const bgColor = {
  black: 'bg-black',
  grey: 'bg-grey',
  yellow: 'bg-yellow',
}
const textColor = {
  black: 'text-black',
  grey: 'text-grey',
  yellow: 'text-black',
}
const hoverText = {
  black: 'hover:text-white',
  grey: 'hover:text-white',
  yellow: 'hover:text-black',
}

const Button: React.FC<{
  children: React.ReactNode;
  href?: string;
  color?: 'black' | 'grey' | 'yellow';
  title?: string;
}> = ({ children, href, color = 'black', title }) => {
  return (
    <a
      href={href}
      role="button"
      target="_blank"
      rel="noopener noreferrer"
      title={title}
      className={`block w-max mt-6 px-3 py-2 border-2 ${borderColor[color]} ${textColor[color]} relative group ${hoverText[color]} hover:transition-all`}
    >
      {children}
      <span
        className={`absolute left-0 bottom-0 w-0 h-full ${bgColor[color]} -z-10 group-hover:w-full transition-all`}
      ></span>
    </a>
  );
};

export default Button;
