import React from 'react';

const Button: React.FC<{
  children: React.ReactNode;
  href?: string;
  color?: 'yellow' | 'blue-light';
  title?: string;
}> = ({ children, href, color = 'yellow', title }) => {
  // We can't construct the color dynamically because tailwind will only recognise unbroken class strings in the source code
  const borderColor =
    color === 'yellow' ? 'border-yellow' : 'border-blue-light';
  const bgColor = color === 'yellow' ? 'bg-yellow' : 'bg-blue-light';
  const textColor = color === 'yellow' ? 'text-yellow' : 'text-blue-light';

  return (
    <a
      href={href}
      role="button"
      target="_blank"
      rel="noopener noreferrer"
      title={title}
      className={`block w-max mt-6 px-3 py-2 border-2 ${borderColor} ${textColor} relative group hover:text-blue-dark hover:transition-all`}
    >
      {children}
      <span
        className={`absolute left-0 bottom-0 w-0 h-full ${bgColor} -z-10 group-hover:w-full transition-all`}
      ></span>
    </a>
  );
};

export default Button;
