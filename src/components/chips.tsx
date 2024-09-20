import * as React from 'react';

const Chips: React.FC<{
  className?: string;
  chips: string[];
}> = ({ className, chips }) => {
  return (
    <div className={`flex flex-wrap mb-4 gap-2 ${className}`}>
      {chips.map((name, index) => (
        <span
          key={index}
          className="text-black border border-yellow px-2 rounded break-words"
        >
          {name}
        </span>
      ))}
    </div>
  );
};

export default Chips;
