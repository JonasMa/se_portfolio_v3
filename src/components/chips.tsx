import * as React from 'react';

const Chips: React.FC<{
  className?: string;
  chips: string[];
}> = ({ className, chips }) => {
  return (
    <div className={`flex flex-wrap mb-4 gap-2 ${className}`}>
      {chips.map((name, index) => (
        <span
          key={name}
          className="font-mono text-ink bg-bg border-2 border-ink px-2.5 py-0.5 text-sm font-medium break-words"
        >
          {name}
        </span>
      ))}
    </div>
  );
};

export default Chips;
