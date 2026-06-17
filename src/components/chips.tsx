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
          className="text-ink bg-surface border border-border px-2.5 py-0.5 rounded-full text-sm break-words"
        >
          {name}
        </span>
      ))}
    </div>
  );
};

export default Chips;
