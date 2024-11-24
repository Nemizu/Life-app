import React from 'react';

interface ButtonPanelProps {
  onAddRow: () => void;
  onAddColumn: () => void;
  onReset: () => void;
  onResetGridSize: () => void;
}

const ButtonPanel: React.FC<ButtonPanelProps> = ({ onAddRow, onAddColumn, onReset, onResetGridSize }) => {
  return (
    <div className="button-container">
      <button onClick={onAddRow} className="add-button">1列追加</button>
      <button onClick={onAddColumn} className="add-button">1行追加</button>
      <button onClick={onReset} className="rm-button">全マス消去</button>
      <button onClick={onResetGridSize} className="rm-button">グリッド初期化</button>
    </div>
  );
};

export default ButtonPanel;