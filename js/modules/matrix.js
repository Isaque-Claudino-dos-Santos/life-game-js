const matrix = {};

/**
 *
 * @param {[maxRow:number,maxColumn:number]} param0
 * @param { ({row,column}:{ row: number, column: number },[maxRow,maxColumn]:[maxRow:number,maxColumn: number]) => void} callback
 */
matrix.forEach = ([maxRow, maxColumn], callback) => {
  let index = 0;
  for (let i = 0; i < maxRow; i++) {
    for (let j = 0; j < maxColumn; j++) {
      callback({ row: i, column: j }, [maxRow, maxColumn], index);
      index++;
    }
  }
};

export default matrix;

[].forEach((element) => {});
