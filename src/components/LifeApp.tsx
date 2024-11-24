import React, { useState } from 'react';
import Grid from './Grid.tsx';
import ButtonPanel from './ButtonPanel.tsx';
import '../App.css';

const INITIAL_ROW_SIZE = 50; // 初期の縦のセル数
const INITIAL_COL_SIZE = 50; // 初期の横のセル数

const GridApp: React.FC = () => {
    const [grid, setGrid] = useState<boolean[][]>(
      Array(INITIAL_ROW_SIZE).fill(null).map(() => Array(INITIAL_COL_SIZE).fill(false))
    );
  
    // クリックしたマスの状態を切り替える関数
    const handleClick = (row: number, col: number) => {
      const newGrid = grid.map(row => [...row]); // 各行をコピー
      newGrid[row][col] = !newGrid[row][col]; // 状態を反転させる
      setGrid(newGrid); // 状態を更新
    };
  
    // 全マスの状態をリセットする関数
    const handleReset = () => {
      setGrid(Array(grid.length).fill(null).map(() => Array(grid[0].length).fill(false)));
    };
  
    // 縦（行）を追加する関数
    const handleAddRow = () => {
      const newGrid = [...grid]; // 現在のgridをコピー
      newGrid.push(Array(grid[0].length).fill(false)); // 新しい行を追加
      setGrid(newGrid); // 状態を更新
      // grid-sizeを更新
      document.documentElement.style.setProperty('--grid-col-size', `${newGrid.length}`);
    };
  
    // 横（列）を追加する関数
    const handleAddColumn = () => {
      const newGrid = grid.map(row => [...row, false]); // 各行に新しい列（false）を追加
      setGrid(newGrid); // 状態を更新
      // grid-sizeを更新
      document.documentElement.style.setProperty('--grid-row-size', `${newGrid[0].length}`);
    };
  
    // グリッドの大きさをもとに戻す関数
    const handleResetGridSize = () => {
      setGrid(Array(INITIAL_ROW_SIZE).fill(null).map(() => Array(INITIAL_COL_SIZE).fill(false)));
      // grid-sizeを更新
      document.documentElement.style.setProperty('--grid-row-size', `${INITIAL_COL_SIZE}`);
      document.documentElement.style.setProperty('--grid-col-size', `${INITIAL_ROW_SIZE}`);
    };


  return (
    <div>
      <div className="header">
        <h1>Grid</h1>
      </div>
      <div className="grid-container">
        <Grid grid={grid} onClick={handleClick} />
        <ButtonPanel
          onAddRow={handleAddRow}
          onAddColumn={handleAddColumn}
          onReset={handleReset}
          onResetGridSize={handleResetGridSize}
        />
      </div>
    </div>
  );
};

export default GridApp;