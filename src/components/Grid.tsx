import React from 'react';

interface GridProps {
  grid: boolean[][];
  onClick: (row: number, col: number) => void;
}

const Grid: React.FC<GridProps> = ({ grid, onClick }) => {
  return (
    <div className="grid">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="grid-row">
          {row.map((cell, colIndex) => (
            <div
              key={colIndex}
              className={`grid-cell ${cell ? 'active' : ''}`}
              onClick={() => onClick(rowIndex, colIndex)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Grid;